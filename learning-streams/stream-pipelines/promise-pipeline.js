const fs = require('fs');
const stream = require('stream');
const util = require('util');

const pipeline = util.promisify(stream.pipeline);

const mod = new stream.Transform ({
	transform(chunk, encoding, callback) {
		callback(null, chunk.toString().toLowerCase());
	},
});

const rs = fs.createReadStream("./file.txt");
const ws = fs.createWriteStream("./newFile.txt");

async function run() {
	await pipeline (rs, mod, ws
		);
	console.log("Pipeline succeeded");
};

run().catch((err) => {
	console.log("Pipeline failed: ", err.message);
});
