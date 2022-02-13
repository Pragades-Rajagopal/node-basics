const express = require('express');
const path = require('path');
const index = require('./routes/index');

const port = 8000;
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.use("/", index);


app.listen(port, () => {
	console.log(`Server is running in port ${port}`);
});
