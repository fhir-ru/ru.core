import { readFile, readdir } from 'node:fs/promises';
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

const enrichDataWithFilePath = (fshFileNames) => {
    return (data) => {
        const [, fileIndex] = data.input.split('_');
        const documentName = fshFileNames[fileIndex].slice(0, fshFileNames[fileIndex].length - 4).split('_')[0];

        return {
            message: data.message,
            location: data.location,
            input: documentName,
        };
    };
};

const buildWarningErrorMessage = (type) => {
    return (data) => [
        `${type} message: ${data.message}`,
        `fileName: ${data.input}`,
        `location: Start line: ${data.location.startLine}; End line: ${data.location.endLine}`,
        '',
    ];
};

const getImplementationGuideId = (documentName) => {
    if (documentName.startsWith('core')) {
        return 'core';
    }

    if (documentName.startsWith('lab')) {
        return 'lab';
    }

    return documentName;
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

    const folderNameByIG = {
        core: 'RuCoreIG',
        lab: 'RuLabIG',
    };

    const implementationGuideName = folderNameByIG[implementationGuideId];

    if (!implementationGuideName) {
        throw new Error(`Implementation guide "${implementationGuideId}" does not exist`);
    }

    const sushiConfigYaml = await readFile(getAbsolutePath(`${implementationGuideName}/sushi-config.yaml`), {
        encoding: 'utf8',
    });

    const sushiConfig = normalizeSushiConfig(parse(sushiConfigYaml));

    const fshFileNames = (await readdir(getAbsolutePath(`${implementationGuideName}/input/fsh`))).filter(
        (fshFileName) => !fshFileName.includes(documentName),
    );

    const fshFilePaths = fshFileNames.map((fileName) =>
        getAbsolutePath(`${implementationGuideName}/input/fsh/${fileName}`),
    );

    const fshDocumentContents = await Promise.all(
        fshFilePaths.map((filePath) => readFile(filePath, { encoding: 'utf8' })),
    );

    const { fhir, warnings, errors, $$package } = await fshToFhirOverride(
        fshDocumentContents.concat(documentContent),
        sushiConfig,
    );

    const documentPath = `${documentName}.fsh`;

    const fhirResult = {
        fhir,
        $$package,
        warnings: warnings.map(enrichDataWithFilePath(fshFileNames.concat(documentPath))),
        errors: errors.map(enrichDataWithFilePath(fshFileNames.concat(documentPath))),
    };

    return buildValidationResult(fhirResult);
};
