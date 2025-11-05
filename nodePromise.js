const fs = require("fs").promises;

fs.readFile('example.txt', 'utf8').then(data => console.log("File COntent:", data)).catch(error => console.error("Error:" , error))
