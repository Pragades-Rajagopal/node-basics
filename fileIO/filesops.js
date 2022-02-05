const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'test.txt');

const contents = fs.readFileSync(filePath, "utf8");
console.log("File Content: ",contents);

const mod = contents.toUpperCase();
fs.writeFileSync(filePath, mod);
console.log("File Updated!")

const modContent = fs.readFileSync(filePath, "utf8");
console.log("Updated content: ", modContent);

