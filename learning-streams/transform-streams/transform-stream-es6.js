const fs = require('fs');
const {Transform} = require('stream');

const rs = fs.createReadStream("./file.txt");
const ws = fs.createWriteStream("./newFile.txt");

class modify extends Transform {
	constructor() {
		super();
	}

	_transform(chunk, encoding, callback) {
		this.push(chunk.toString().toUpperCase());
		callback();
	}
}

rs.pipe(new modify()).pipe(ws);
