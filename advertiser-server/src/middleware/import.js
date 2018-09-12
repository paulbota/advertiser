import fs from 'fs';

/**
 * Import the file with data
 *
 * @param fileName the name of the file
 * @returns {Promise}
 */
export const importFile = async (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
};

/**
 * Import the image
 *
 * @param imageName the name of the image
 * @returns {Promise}
 */
export const importImage = async (imageName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(imageName, (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};