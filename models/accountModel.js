import fs from 'fs'
import { filePath } from '../utils/dataFilePath.js'

const readAccountsFromFile = () => {
    try {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(fileData)
    } catch (error) {
        throw new Error("Error reading from acoount file")
    }
}

const writeAccountsToFile = (accounts) => {
    try {
        fs.writeFileSync(filePath,JSON.stringify(accounts), 'utf-8')
    } catch (error) {
        throw new Error("Error writing to the movies file")
    }
}

export {readAccountsFromFile, writeAccountsToFile}