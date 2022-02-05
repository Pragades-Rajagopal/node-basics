const net = require('net');

const HOSTNAME = "localhost";
const PORT = 3000;

net.createServer((socket) => {
	console.log("Client connected!");

	socket.on("data", (message) => {
		socket.write(`Hello ${message}`);
	})
}).listen(PORT, HOSTNAME);
