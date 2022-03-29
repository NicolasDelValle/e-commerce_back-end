const { User } = require("../models");

async function index(req, res) {
  const { id } = req.user;
  const user = await User.findByPk(id);
  if (user.isAdmin) {
    const users = await User.findAll();
    res.json(users);
  } else {
    res.json("No es admin");
  }
}

module.exports = {
  index,
  show,
};
