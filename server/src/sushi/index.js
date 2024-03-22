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

const enrhichDataWithFilePath = (fshFileNames) => {
    return (data) => {
        const [, fileIndex] = data.input.split('_');

        return {
            message: data.message,
            location: data.location,
            input: fshFileNames[fileIndex],
        };
    };
};

const buildWarningErrorMessage = (type) => {
    return (data) =>
        [
            `${type} message: ${data.message}`,
            `fileName: ${data.input}`,
            `location: Start line: ${data.location.startLine}; End line: ${data.location.endLine}`,
        ].join('\n');
};

const buildFhirResultMessage = (fhirResult) => {
    const errorsInformationMessage = fhirResult.errors.map(buildWarningErrorMessage('error')).join('\n\n');
    const warningsInformationMessage = fhirResult.warnings.map(buildWarningErrorMessage('warn')).join('\n\n');

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
    ].join('\n');

    return [errorsInformationMessage, warningsInformationMessage, message].filter(Boolean).join('\n\n');
};

export const validateFsh = async (implementationGuideId, currentFshDocumentContent) => {
    const folderNameByIG = {
        core: 'RuCoreIG',
        lab: 'RuLabIG',
    };

    const implementationGuideName = folderNameByIG[implementationGuideId];

    if (!implementationGuideName) {
        throw new Error(`Implementation guide with id "${implementationGuideId}" does not exist`);
    }

    const sushiConfigYaml = await readFile(getAbsolutePath(`${implementationGuideName}/sushi-config.yaml`), {
        encoding: 'utf8',
    });

    const sushiConfig = normalizeSushiConfig(parse(sushiConfigYaml));

    const fshFileNames = await readdir(getAbsolutePath(`${implementationGuideName}/input/fsh`));

    const fshFilePaths = fshFileNames.map((fileName) =>
        getAbsolutePath(`${implementationGuideName}/input/fsh/${fileName}`),
    );

    const fshDocumentContents = await Promise.all(
        fshFilePaths.map((filePath) => readFile(filePath, { encoding: 'utf8' })),
    );

    const { fhir, warnings, errors, $$package } = await fshToFhirOverride(
        fshDocumentContents.concat(currentFshDocumentContent),
        sushiConfig,
    );

    const fhirResult = {
        fhir,
        $$package,
        warnings: warnings.map(enrhichDataWithFilePath(fshFileNames)),
        errors: errors.map(enrhichDataWithFilePath(fshFileNames)),
    };

    return buildFhirResultMessage(fhirResult);
};
