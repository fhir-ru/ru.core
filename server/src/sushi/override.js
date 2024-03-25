import { utils, fhirdefs, sushiImport, sushiExport } from 'fsh-sushi';

const levels = ['silly', 'debug', 'verbose', 'http', 'info', 'warn', 'error', 'silent'];

const isLevel = (level) => {
    return levels.includes(level);
};

export const fshToFhirOverride = async (input, options) => {
    utils.errorsAndWarnings.reset();
    utils.errorsAndWarnings.shouldTrack = true;

    if (options.logLevel == 'silent') {
        utils.logger.transports[0].silent = true;
    } else if (options.logLevel != null) {
        if (!isLevel(options.logLevel)) {
            return {
                fhir: null,
                errors: [
                    {
                        message: `Invalid logLevel: ${options.logLevel}. Valid levels include: ${levels.join(', ')}.`,
                    },
                ],
                warnings: [],
            };
        }
        utils.logger.level = options.logLevel;
    }

    const config = {
        canonical: options.canonical ?? 'http://example.org',
        FSHOnly: true,
        fhirVersion: [options.fhirVersion ?? '4.0.1'],
        dependencies: options.dependencies,
        version: options.version,
    };

    const defs = new fhirdefs.FHIRDefinitions();

    await utils.loadExternalDependencies(defs, config);

    const rawFSHes = [];

    if (Array.isArray(input)) {
        input.forEach((input, i) => {
            rawFSHes.push(new sushiImport.RawFSH(input, `Input_${i}`));
        });
    } else {
        rawFSHes.push(new sushiImport.RawFSH(input));
    }

    const tank = utils.fillTank(rawFSHes, config);

    const outPackage = sushiExport.exportFHIR(tank, defs);

    const fhir = [];

    ['profiles', 'extensions', 'instances', 'valueSets', 'codeSystems', 'logicals', 'resources'].forEach(
        (artifactType) => {
            outPackage[artifactType].forEach((artifact) => {
                fhir.push(artifact.toJSON(false));
            });
        },
    );

    // Override the return value for further use in bulding the validation result
    return {
        fhir,
        errors: utils.errorsAndWarnings.errors,
        warnings: utils.errorsAndWarnings.warnings,
        $$package: outPackage,
    };
};
