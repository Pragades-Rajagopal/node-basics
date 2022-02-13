const express = require('express');
const path = require('path');
const Router = require('./routes/index');

const port = 8000;
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(Router);


app.listen(port, () => {
	console.log(`Server is running in port ${port}`);
});
