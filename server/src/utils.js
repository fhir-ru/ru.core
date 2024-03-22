import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getAbsolutePath = (relativePath) => {
    return resolve(__dirname, '../../', relativePath);
};

export const pad = (string, maxLength, fillString) => {
    const prePad = Math.floor((maxLength - string.length) / 2) + string.length;

    return string.padStart(prePad, fillString).padEnd(maxLength, fillString);
};
