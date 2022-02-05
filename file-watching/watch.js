const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'file.txt');

fs.watchFile(file, (current, previous) => {
	return console.log(`Time: ${(current.mtime)}`);
});

console.log(file);