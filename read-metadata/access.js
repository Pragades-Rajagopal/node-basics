const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'file.txt');

fs.chmodSync(file, 0o664);
