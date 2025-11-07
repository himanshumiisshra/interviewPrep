const fs = require('fs').promises;


async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log("File content: ", data)
        
    } catch (error) {
        console.error("Error: ", error)
        
    }
}

readFile();