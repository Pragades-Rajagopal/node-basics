const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'test.txt');

fs.readFile(filePath, "utf8", (err, contents) => {
	if (err) { return console.log(err.message); }
	
	console.log("Contents: ", contents);

	const modContent = contents.toUpperCase();
	// fs.writeFile(filePath, modContent, (err) => {
	// 	if (err) { console.log(err.message); }
	// 	console.log("File Updated!");
	// });
	setTimeout(() => updateFile(filePath, modContent), 10);
});

const updateFile = (filePath, content) => {
	fs.writeFile(filePath, content, (err) => {
		if (err) { console.log(err.message); }
		console.log("File Updated!");
	});
};

setInterval(() => process.stdout.write("*** \n"), 1).unref();
