const fs = require('fs');

const file = fs.createWriteStream("./file.txt", "utf8");

for (let i = 0; i <= 100; i++) {
	file.write("I'm love with Node.js and Python languages. \n");
	
};

file.on("finish", () => {console.log("File written");});

