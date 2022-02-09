const WebSocket = require('ws');

const Server = new WebSocket.Server({
	port: 3000,
});

Server.on("connection", (socket) => {
	socket.on("message", (msg) => {
		console.log("Received: ", msg);
		if (msg === "Hello") socket.send("World!");
	});
});
