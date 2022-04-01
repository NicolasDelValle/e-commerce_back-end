const { User, Product } = require("../models");

async function index(req, res) {
  const users = await User.findAll();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).json("No se ha encontrado la lista de usuarios indicado");
  }
}

async function show(req, res) {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json("No se ha encontrado el usuario indicado");
  }
}
async function updateUser(req, res) {
  const { id } = req.params;
  try {
    const userUpdated = await User.findByPk(id);

    if (!userUpdated) {
      res.status(404).json({ message: `No existe usuario indicado` });
    } else {
      userUpdated.isAdmin = !userUpdated.isAdmin;
      userUpdated.save();

      res.status(200).json(userUpdated);
    }
  } catch (err) {
    res.status(404).json("No se encuentra" + " " + err);
  }
}

async function destroyUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await User.destroy({
        where: { id: id },
      });
      res.status(200).json({ message: `El usuario fue eliminado` });
    } else {
      res.status(404).json({ message: "El usuario indicado no existe" });
    }
  } catch (err) {
    res
      .status(404)
      .json({ message: "Usuario no encontrado o token incorrecto" });
  }
}

async function store(req, res) {
  if (req.body) {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } else {
    res
      .status(400)
      .json({ message: "Oucrrio un error al momento de crear el producto" });
  }
}

async function destroyProduct(req, res) {
  const { slug } = req.params;

  const productDelete = await Product.findOne({ where: { slug: slug } });

  if (productDelete) {
    const productDelete = await Product.destroy({ where: { slug: slug } });
    res
      .status(200)
      .json({ message: "El siguiente producto fue eliminado" + productDelete });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
}

async function updateProduct(req, res) {
  const { slug } = req.params;

  try {
    const productUpdated = await Product.findOne({ where: { slug: slug } });

    if (productUpdated) {
      productUpdated.update(req.body);
      res.status(200).json(productUpdated);
    } else {
      res.status(404).json({ message: `No existe producto` });
    }
  } catch (err) {
    res.status(404).json(err);
  }
}
module.exports = {
  index,
  show,
  updateUser,
  destroyUser,
  store,
  destroyProduct,
  updateProduct,
};
