const {Router} = require('express');
const router = Router();

router.get('/login', (req, res, next) => {
	res.render("login", {fail: false});
	next();
});

router.post("/login", (req, res, next) => {
	if(req.session.user) {
		res.redirect("/", 200);
		next();
		return;
	}
	if (req.body.username === "piggo" && req.body.password === "badpiggo") {
		req.session.user = {name: req.body.username};
		res.redirect("/", 200);
		next();
		return;
	}

	res.render("login", {fail: true});
	next();
});

router.get("/logout", (req, res, next) => {
	// req.session.user = null;
	res.redirect("/", 200, {user:null});
	next()
});

module.exports = router;

