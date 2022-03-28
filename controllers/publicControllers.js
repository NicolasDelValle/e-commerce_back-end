const { Product, User } = require("../models");

async function showProducts(req, res) {
	const products = await Product.findAll();

	res.json(products);
}

module.exports = { showProducts };
