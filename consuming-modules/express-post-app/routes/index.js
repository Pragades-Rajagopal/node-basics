const express = require('express');
const router = express.Router();

router.get("/:name?", (req, res) => {
	const title = "Express with EJS";
	const name = req.params.name;
	res.send(`
		<html>
<head>
	<title>${title}</title>
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<h1>${title}</h1>
	<p>Welcome to ${title} based application ${name ? `, ${name}! `: ""}</p>
	<form method="POST" action="data">
		Name: <input name="name"><input type="submit">
	</form>
</body>
</html>
	`);
});

router.post("/data", (req, res) => {
	res.redirect(`/${req.body.name}`);
});

module.exports = router;
