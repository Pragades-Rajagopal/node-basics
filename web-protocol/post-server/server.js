const http = require("http");
const fs = require("fs");
const path = require("path");

const form = fs.readFileSync(path.resolve(
	__dirname, "public", "form.html"));

http.createServer((req, res) => {
	if (req.method === "GET") {
		getForm (res);
		return;
	}
	if (req.method === "POST") {
		postForm (req, res);
		return;
	}
	error(res, 405);

}).listen(3000, () => {console.log("Server running in port:3000")});

function getForm(res) {
	res.writeHead(200, {
		"Content-Type" : "text/html",
	});
	res.end(form);
};

function error(res, code) {
	res.statusCode = code;
	res.end(http.STATUS_CODES[code]);
};

function postForm(req, res) {
	if (req.headers["content-type"] !== "application/x-www-form-urlencoded") {
		error (res, 415);
		return;
	}

	let input = "";
	req.on("data", (data) => {
		input += data.toString().toUpperCase();
	});
	req.on("end", () => {
		console.log(input);
		res.writeHead(200, {
			"Content-Type" : "text/html",
		});
		res.end(form);
	});
}

