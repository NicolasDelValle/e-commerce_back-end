const { User } = require("../models");

async function isAdmin(req, res, next) {
  const { id } = req.user;
  const user = await User.findByPk(id);

  if (!user.isAdmin) {
    return res.status(404).json({ message: "No es admin" });
  }

  next();
}
module.exports = { isAdmin };
