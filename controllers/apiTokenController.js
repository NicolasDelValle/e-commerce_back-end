const { User } = require("../models");
const jwt = require("jsonwebtoken");

async function createToken(req, res) {
  const { password, email } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user && (await user.validatePassword(password))) {
    const newToken = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);
    res.json({ newToken, id: user.id });
  } else {
    res.status(401).json({ message: "Ese email o contraseña es incorrecto" });
  }
}

module.exports = { createToken };
