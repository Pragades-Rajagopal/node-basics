const express = require('express');
const Name = require('./get-name');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
	res.send(`Hello from ${Name.name}!`);
});

app.listen(port, () => {
	console.log("Server is running in port: ", port);
});
