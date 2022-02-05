const fs = require('fs');

const read = fs.createReadStream('./file.txt');

async function run() {
	for await (const chunk of read) {
		console.log("Read chunk: ", chunk);
	}
	console.log("No more data");
};

run();