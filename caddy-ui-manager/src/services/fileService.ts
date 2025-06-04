import fs from 'fs';

// Path to the system Caddyfile
const CADDYFILE_PATH = '/etc/caddy/Caddyfile';

export interface ProxyEntry {
    domain: string;
    target: string;
}

// Parse the Caddyfile into proxy entries
export const readCaddyFile = (): Promise<ProxyEntry[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile(CADDYFILE_PATH, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading Caddyfile:', err);
                return reject(err);
            }

            const entries: ProxyEntry[] = [];
            const regex = /(\S+)\s*{[^}]*?reverse_proxy\s+(\S+)[^}]*}/g;
            let match: RegExpExecArray | null;
            while ((match = regex.exec(data)) !== null) {
                entries.push({ domain: match[1], target: match[2] });
            }

            resolve(entries);
        });
    });
};

// Serialize proxy entries and write them to the Caddyfile
export const writeCaddyFile = (entries: ProxyEntry[]): Promise<void> => {
    const fileContent = entries
        .map(e => `${e.domain} {\n    reverse_proxy ${e.target}\n}`)
        .join('\n\n');

    return new Promise((resolve, reject) => {
        fs.writeFile(CADDYFILE_PATH, fileContent, 'utf8', err => {
            if (err) {
                console.error('Error writing to Caddyfile:', err);
                return reject(err);
            }
            resolve();
        });
    });
};