import fs from 'fs';
import path from 'path';

// Update the path to the correct location of the Caddyfile
const CADDYFILE_PATH = '/etc/caddy/Caddyfile';

export const readCaddyFile = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        fs.readFile(CADDYFILE_PATH, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading Caddyfile:', err);
                return reject(err);
            }
            console.log('Caddyfile content:', data);
            resolve(data);
        });
    });
};

export const writeCaddyFile = (data: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.writeFile(CADDYFILE_PATH, data, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to Caddyfile:', err);
                return reject(err);
            }
            console.log('Successfully wrote to Caddyfile:', data);
            resolve();
        });
    });
};