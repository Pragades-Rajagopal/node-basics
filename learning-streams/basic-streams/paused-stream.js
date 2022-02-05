const fs = require('fs');

const read = fs.createReadStream("./file.txt");

read.on("readable", () => {
	let data = read.read();
	while (data !== null) {
		console.log("Read chunk: ", data);
		data = read.read();
	}
});

read.on("end", () => {
	console.log("End");
});
