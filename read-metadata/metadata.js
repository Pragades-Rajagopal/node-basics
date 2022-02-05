const fs = require('fs');

const file =  process.argv[2];

function printMetadata(file) {
	try {
		const fileStats = fs.statSync(file);
		console.log(fileStats);
	}
	catch (err){
		console.log("Error loading file: "+ err.message+ " : "+ file);
	}
};

printMetadata(file);
