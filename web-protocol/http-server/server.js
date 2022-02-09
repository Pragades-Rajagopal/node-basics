const http = require('http');

// const HOSTNAME = process.env.HOSTNAME || "0.0.0.0";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	if (req.method !== "GET") {
		return error(res, 405);
	}
	if (req.url === "/name") {
		return name(res);
	}
	if (req.url === "/") {
		return index(res);
	}
	error(res, 400);
}).listen(PORT, () => {
	console.log(`Server listening in port ${server.address().port}`);
});

function error(res, code) {
	res.statusCode = code;
	res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}

function name(res) {
	res.end('[{"id": 1, "username": "Doggo"}]');
}

function index(res) {
	res.end('{"name": "Piggie"}');
}

