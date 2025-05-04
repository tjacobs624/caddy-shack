import fs from 'fs';
import path from 'path';

const CADDYFILE_PATH = path.join(__dirname, '../../Caddyfile');

export const readCaddyFile = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(CADDYFILE_PATH, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

export const writeCaddyFile = (data: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(CADDYFILE_PATH, data, 'utf8', (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
};