const process = require('process');

process.stdin.on("data", (data) => {
	const name = data.toString().trim().toUpperCase();
	if (name !== "") {
		process.stdout.write(`Hello ${name}`);
	}
	else {
		process.stderr.write("Empty input!")
	}
});