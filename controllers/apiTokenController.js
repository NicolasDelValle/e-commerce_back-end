const { User } = require("../models");
const jwt = require("jsonwebtoken");

async function createToken(req, res) {
	const { password, email } = req.body;
	const user = await User.findOne({ email });
	console.log(user);
	if (user) {
		const result = await user.validatePassword(password);
		if (result) {
			const newToken = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
			// user.tokens.push(newToken);
			// user.save();
			res.json({ token, id: user.id });
		}
	} else {
		res.status(401).json({ message: "Ese email o contraseña es incorrecto" });
	}
}

module.exports = { createToken };
