const { User } = require("../models");

async function index(req, res) {
  const users = await User.findAll();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).json("Ocurrio un error");
  }
}

async function show(req, res) {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json("Ocurrio un error");
  }
}
async function update(req, res) {
  const { isAdmin } = req.body;
  const { id } = req.params;
  try {
    const userUpdated = await User.findByPk(id);
    console.log(userUpdated);
    if (!userUpdated) {
      res.status(404).json({ message: `No existe user` });
    } else {
      userUpdated.isAdmin = !userUpdated.isAdmin;
      userUpdated.save();

      res.status(200).json(userUpdated);
    }
  } catch (err) {
    res.status(404).json("No se encuentra" + " " + err);
  }
}

async function destroy(req, res) {}
module.exports = {
  index,
  show,
  update,
  destroy,
};
