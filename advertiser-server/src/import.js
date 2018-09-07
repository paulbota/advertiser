import fs from 'fs';

export const importFile = async (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
};