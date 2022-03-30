const { User, Product } = require("../models");

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
async function updateUser(req, res) {
  const { isAdmin } = req.body;
  const { id } = req.params;
  try {
    const userUpdated = await User.findByPk(id);

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

async function destroyUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      const userDelete = await User.destroy({
        where: { id: id },
      });
      res.status(200).json("El siguiente usuario fue eliminado" + userDelete);
    } else {
      res.status(404).json("El usuario indicado no existe");
    }
  } catch (err) {
    res
      .status(404)
      .json({ message: "Usuario no encontrado o token incorrecto" });
  }
}

async function store(req, res) {
  const {
    name,
    description,
    details,
    imageUrl,
    stock,
    price,
    featured,
    slug,
    categoryId,
  } = req.body;
  if (req.body) {
    const newProduct = await Product.create({
      name: name,
      description: description,
      details: details,
      imageUrl: imageUrl,
      stock: stock,
      price: price,
      featured: featured,
      slug: slug,
      categoryId: categoryId,
    });
    res.status(200).json(newProduct);
  }
}

async function destroyProduct(req, res) {
  const { slug } = req.params;

  const productDelete = await Product.findOne({ where: { slug: slug } });

  if (productDelete) {
    const productDelete = await Product.destroy({ where: { slug: slug } });
    res.status(200).json("El siguiente producto fue eliminado" + productDelete);
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
      // productUpdated.save();
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
