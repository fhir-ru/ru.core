import express from 'express';
import { validateFsh } from './sushi/index.js';

const app = express();
const port = 8083;

app.use(express.json());

app.post('/api/v1/validators/fsh/:ig', async (req, res) => {
    const currentFshDocumentContent = req.body.content ?? '';
    const validationResultMessage = await validateFsh(req.params.ig, currentFshDocumentContent);

    res.send(validationResultMessage);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
