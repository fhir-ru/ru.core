import { readFile, readdir } from 'node:fs/promises';
import { sushiClient } from 'fsh-sushi';
import { fshToFhirOverride } from './override.js';
import { getAbsolutePath, pad } from '../utils.js';
import { parse } from '../parsers/index.js';

const normalizeSushiConfig = (config) => {
    const dependencies = config.dependencies ?? {};

    const normalizedDependencies = Object.entries(dependencies).map(([dependencyName, dependencyConfig]) => {
        if (typeof dependencyConfig === 'string' || typeof dependencyConfig === 'number') {
            return { packageId: dependencyName, version: dependencyConfig };
        }

        return {
            packageId: dependencyName,
            version: dependencyConfig.version,
        };
    });

    return {
        canonical: config.canonical,
        version: config.version,
        fhirVersion: config.fhirVersion,
        dependencies: normalizedDependencies,
    };
};

const enrichProblems = (problems, zenDocumentNames) => {
    const uniqueProblems = [];

    problems.forEach((problem) => {
        const isAlreadyPassedProblem = uniqueProblems.find(
            (uniqueProblem) => uniqueProblem.message === problem.message && uniqueProblem.input === problem.input,
        );

        if (!isAlreadyPassedProblem) {
            uniqueProblems.push(problem);
        }
    });

    return uniqueProblems.map((problem) => {
        const [, fileIndex] = problem.input.split('_');
        const zenDocumentName = zenDocumentNames[fileIndex];

        return {
            message: problem.message,
            location: problem.location,
            input: zenDocumentName,
        };
    });
};

const buildWarningErrorMessage = (problemTypeName) => {
    return (problemEntry) => [
        `${problemTypeName} message: ${problemEntry.message}`,
        `fileName: ${problemEntry.input}`,
        `location: Start line: ${problemEntry.location.startLine}; End line: ${problemEntry.location.endLine}`,
        '',
    ];
};

const getImplementationGuideId = (zenDocumentName) => {
    if (zenDocumentName.startsWith('core')) {
        return 'core';
    }

    if (zenDocumentName.startsWith('lab')) {
        return 'lab';
    }

    return zenDocumentName;
};

const sanitizeFshContent = (zenDocumentContent) => {
    let isMultiLineKeywordContinues = false;

    return zenDocumentContent
        .split('\n')
        .map((line) => {
            const trimmedLine = line.trim();
            const isAnnotationLine = trimmedLine.startsWith('^');
            const isSingleKeywordLine = trimmedLine.startsWith(':') && !trimmedLine.endsWith('/');
            const isFshProfileStarts = trimmedLine.startsWith(':') && trimmedLine.endsWith('fsh/');

            if (isAnnotationLine || isSingleKeywordLine || isFshProfileStarts) {
                isMultiLineKeywordContinues = false;

                return '';
            }

            const isMultiKeywordLine = trimmedLine.startsWith(':') && trimmedLine.endsWith('/');

            if (isMultiKeywordLine) {
                isMultiLineKeywordContinues = true;

                return '';
            }

            if (isMultiLineKeywordContinues) {
                return '';
            }

            isMultiLineKeywordContinues = false;

            return line;
        })
        .join('\n');
};

const buildValidationResult = (fhirResult) => {
    const errorsInformationMessage = fhirResult.errors.map(buildWarningErrorMessage('error'));
    const warningsInformationMessage = fhirResult.warnings.map(buildWarningErrorMessage('warn'));

    const warningsNumber = fhirResult.warnings.length;
    const errorsNumber = fhirResult.errors.length;

    const warningsOutput = pad(`${warningsNumber} Warning${warningsNumber !== 1 ? 's' : ''}`, 12);
    const errorsOutput = pad(`${errorsNumber} Error${errorsNumber !== 1 ? 's' : ''}`, 13);

    const profilesOutput = pad(fhirResult.$$package.profiles.length.toString(), 13);
    const logicalsOutput = pad(fhirResult.$$package.logicals.length.toString(), 12);
    const resourcesOutput = pad(fhirResult.$$package.resources.length.toString(), 13);
    const instancesOutput = pad(fhirResult.$$package.instances.length.toString(), 18);
    const extensionsOutput = pad(fhirResult.$$package.extensions.length.toString(), 12);
    const valueSetsOutput = pad(fhirResult.$$package.valueSets.length.toString(), 18);
    const codeSystemsOutput = pad(fhirResult.$$package.codeSystems.length.toString(), 17);

    const message = [
        '╔' + '════════════════════════ SUSHI RESULTS ══════════════════════════' + '╗',
        '║' + ' ╭───────────────┬──────────────┬──────────────┬───────────────╮ ' + '║',
        '║' + ' │    Profiles   │  Extensions  │   Logicals   │   Resources   │ ' + '║',
        '║' + ' ├───────────────┼──────────────┼──────────────┼───────────────┤ ' + '║',
        '║' + ` │ ${profilesOutput} │ ${extensionsOutput} │ ${logicalsOutput} │ ${resourcesOutput} │ ` + '║',
        '║' + ' ╰───────────────┴──────────────┴──────────────┴───────────────╯ ' + '║',
        '║' + ' ╭────────────────────┬───────────────────┬────────────────────╮ ' + '║',
        '║' + ' │      ValueSets     │    CodeSystems    │     Instances      │ ' + '║',
        '║' + ' ├────────────────────┼───────────────────┼────────────────────┤ ' + '║',
        '║' + ` │ ${valueSetsOutput} │ ${codeSystemsOutput} │ ${instancesOutput} │ ` + '║',
        '║' + ' ╰────────────────────┴───────────────────┴────────────────────╯ ' + '║',
        '║' + '                                                                 ' + '║',
        '╠' + '═════════════════════════════════════════════════════════════════' + '╣',
        '║' + ` ${'HL7 FHIR Russia'.padEnd(36)} ${errorsOutput} ${warningsOutput} ` + '║',
        '╚' + '═════════════════════════════════════════════════════════════════' + '╝',
    ];

    return {
        problemsNumber: warningsNumber + errorsNumber,
        messageLines: [errorsInformationMessage, warningsInformationMessage, message].flat(Infinity),
    };
};

export const validateFsh = async (documentName, documentContent) => {
    const implementationGuideId = getImplementationGuideId(documentName);

    const folderNameByImplementationGuideId = {
        core: 'RuCoreIG',
        lab: 'RuLabIG',
    };

    const implementationGuideFolderName = folderNameByImplementationGuideId[implementationGuideId];

    if (!implementationGuideFolderName) {
        throw new Error(`Implementation guide "${implementationGuideId}" does not exist`);
    }

    const sushiConfigYaml = await readFile(getAbsolutePath(`${implementationGuideFolderName}/sushi-config.yaml`), {
        encoding: 'utf8',
    });

    const sushiConfig = normalizeSushiConfig(parse(sushiConfigYaml));

    const zenDocumentNames = (await readdir(getAbsolutePath(`${implementationGuideFolderName}/input/fsh`))).map(
        (zenDocumentFileName) => zenDocumentFileName.split('.').slice(0, -1).join('.').split('_')[0],
    );

    const uniqueZenDocumentNames = [...new Set(zenDocumentNames)].filter(
        (zenDocumentName) => zenDocumentName !== documentName,
    );

    const zenDocumentRelativePaths = uniqueZenDocumentNames.map(
        (zenDocumentName) => `${zenDocumentName.replace(/\./g, '/')}.zd`,
    );

    const zenDocumentAbsolutePaths = zenDocumentRelativePaths.map((zenDocumentRelativePath) =>
        getAbsolutePath(`docs/${zenDocumentRelativePath}`),
    );

    const fshDocumentContents = (
        await Promise.all(
            zenDocumentAbsolutePaths.map((zenDocumentAbsolutePath) =>
                readFile(zenDocumentAbsolutePath, { encoding: 'utf8' }),
            ),
        )
    ).map((zenDocumentContent) => sanitizeFshContent(':zd/docname "docname"\n' + zenDocumentContent));

    const { fhir, warnings, errors, $$package } = await fshToFhirOverride(
        fshDocumentContents.concat(sanitizeFshContent(documentContent)),
        sushiConfig,
    );

    const fhirResult = {
        fhir,
        $$package,
        warnings: enrichProblems(warnings, uniqueZenDocumentNames.concat(documentName)),
        errors: enrichProblems(errors, uniqueZenDocumentNames.concat(documentName)),
    };

    return buildValidationResult(fhirResult);
};
