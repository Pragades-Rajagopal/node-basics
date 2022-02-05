const fs = require('fs').promises;
const path = require('path');

const filepath = path.join(process.cwd(), 'test.txt');

async function run() {
	try {
		const contents = await fs.readFile(filepath, "utf8");
		console.log("File Contents: ", contents);
	} catch (error) {
		console.log(error);
	}
};

run();
