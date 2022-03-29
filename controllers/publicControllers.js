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

module.exports = { showProducts, showProduct };
