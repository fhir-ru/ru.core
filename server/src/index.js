import express from 'express';
import sushi from 'fsh-sushi';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { readFile, readdir } from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8083;

app.use(express.json());

app.post('/api/v1/validators/fsh', async (req, res) => {
    const sushiConfig = {
        canonical: 'http://fhir.ru',
        version: '0.1.0',
        fhirVersion: ['5.0.0'],
        status: 'active',
        releaseLabel: 'ci-build',

        publisher: {
            name: 'HL7 FHIR Россия',
            url: 'https://fhir.ru',
        },
    };

    const coreFshFolderPath = __dirname + '/../../RuCoreIG/input/fsh';
    // const labFshFolderPath = __dirname + '/../../RuLabIG/input/fsh';

    const coreFshFilePaths = (await readdir(coreFshFolderPath)).map((fileName) => coreFshFolderPath + '/' + fileName);

    // const labFshFilePaths = (await readdir(labFshFolderPath)).map((fileName) => labFshFolderPath + '/' + fileName);

    const fshFilePaths = [
        ...coreFshFilePaths,
        // ...labFshFilePaths,
    ];

    const currentFshDocumentContent = req.body.value ?? '';

    const fshDocumentContents = await Promise.all(
        fshFilePaths.map((filePath) => readFile(filePath, { encoding: 'utf8' })),
    );

    const fhirResult = await sushi.sushiClient.fshToFhir(
        fshDocumentContents.concat(currentFshDocumentContent).join('\n'),
        sushiConfig,
    );

    res.send(fhirResult);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
