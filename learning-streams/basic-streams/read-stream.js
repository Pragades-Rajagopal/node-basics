const fs = require('fs');

const read = fs.createReadStream("./file.txt");

read.on("data", (data) => {
	console.log("Read chunk: ", data.toString());
});

read.on("end", () => {
	console.log("End of file");
});
