const fs = require('fs');
const {pipeline, Transform} = require('stream');

const mod = new Transform ({
	transform(chunk, encoding, callback) {
		callback(null, chunk.toString().toLowerCase());
	},
});

pipeline(
	fs.createReadStream("./file.txt"),
	mod,
	fs.createWriteStream("./newFile.txt"),

	(err) => {
		if (err) {
			console.log("Pipeline failed: ", err.message);
		} else {
			console.log("Pipeline succeeded");
		}
	}
	);


