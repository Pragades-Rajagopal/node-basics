const {Router} = require('express');
const router = Router();


router.get("/", (req, res) => {
	// const user = req.session.user;
	res.render("index", {user:"piggo"});
});


module.exports = router;