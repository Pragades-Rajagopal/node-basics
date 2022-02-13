const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const helmet = require("helmet");

const routes = require('./routes/index');
const auth = require("./routes/auth");

const app = express();
app.use(helmet());

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));

app.use(routes);
app.use(session({
	name: "SESSIONID",
	secret: "Node Cookbook",
	resave: false,
	saveUninitialized: false,
}));

app.use(auth);

app.get("/check", (req, res) => {
	res.send("Homepage!");
});

app.listen(8000, () => {
	console.log("Server is running in port 8000");
});


