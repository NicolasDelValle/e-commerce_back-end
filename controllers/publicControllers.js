const { Product, User } = require("../models");

async function showProducts(req, res) {
  const products = await Product.findAll();

  res.json(products);
}

async function showProduct(req, res) {
  const productSlug = req.params.slug;
  const product = await Product.findOne({ where: { slug: productSlug } });

  res.json(product);
}

async function register(req, res) {
  try {
    const { firstname, lastname, email, address, number, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res
        .status(402)
        .json({ message: `El usuario con correo ${email} ya existe` });
    } else {
      await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address,
        phone: number,
        password: password,
        isAdmin: false,
      });
      const newUser = await User.findOne({ where: { email } });
      res.json(newUser);
    }
  } catch (err) {
    res.status(404).json({ message: `Algo pasó ${err}` });
    console.log(err);
  }
}

module.exports = { showProducts, showProduct, register };
