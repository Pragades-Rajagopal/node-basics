const path = require('path');
const fs = require('fs');

const folder = path.resolve(__dirname, '../../../', 'Program Files');

// /dev/urandom should work for Linux

const read = fs.createReadStream(folder);

let size = 0;
read.on("data", (data) => {
	size += data.length;
	console.log("File size: ", size);
});
