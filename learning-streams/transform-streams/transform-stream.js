const fs = require('fs');
const { Transform } = require('stream');

const read = fs.createReadStream("./file.txt");

const newFile = fs.createWriteStream("./newFile.txt");

const modify = new Transform({
	transform(chunk, encoding, callback) {
		callback(null, chunk.toString().toLowerCase());
	},
});

read.pipe(modify).pipe(newFile);
