import express from 'express';
import cors from 'cors';
import { validateFsh } from './sushi/index.js';

const app = express();
const port = 8083;

app.use(cors());
app.use(express.json());

app.post('/api/v1/validators/fsh', async (req, res) => {
    const { documentName, documentContent } = req.body;

    const fshDocumentContent = documentContent.replace(/^[:\^].*/gm, '').trim();

    try {
        const validationResult = await validateFsh(documentName, fshDocumentContent);

        res.send(validationResult);
    } catch (error) {
        res.status(404).send({ errorMessage: error.message });
    }
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
