const { Readable } = require('stream');

//function* denotes generator function!
async function* generate() {
	yield "Node.js";
	yield "is";
	yield "a";
	yield "powerful";
	yield "language";
}

const readable = Readable.from(generate());

readable.on("data", (data) => {
	console.log(data);
});
