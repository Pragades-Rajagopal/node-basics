const WebSocket = require('ws');

const Server = new WebSocket.Server({
	port: 3000,
});

Server.on("connection", (socket) => {
	socket.on("message", (msg) => {
		value = msg.toString();
		console.log("Received: ", value);
		if (value === "Hello") socket.send("World!");
	});
});
