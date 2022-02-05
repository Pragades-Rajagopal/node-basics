const fs = require('fs');

fs.createReadStream("./file.txt")
.pipe(process.stdout);
