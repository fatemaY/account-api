import fs from 'fs'
import { filePath } from '../utils/dataFilePath.js'

const initializeDataFile = () => {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]), "utf-8");
    }
};


const readAccountsFromFile = () => {
    try {
        initializeDataFile();
        const fileData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileData)
    } catch (error) {
        throw new Error("Error reading from acoount file")
    }
}

const writeAccountsToFile = (accounts) => {
    try {
        initializeDataFile();
        fs.writeFileSync(filePath,JSON.stringify(accounts), 'utf-8')
    } catch (error) {
        throw new Error("Error writing to the movies file")
    }
}

export {readAccountsFromFile, writeAccountsToFile}