const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(__dirname, '../db.json');
async function readProducts() {
    try {
        const data = await fs.readFile(pathToFile, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    readProducts
};