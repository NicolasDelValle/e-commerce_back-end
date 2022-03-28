const { Category } = require("../models");

module.exports = async () => {
	const categories = [
		{ name: "Tablas" },
		{ name: "Hardware" },
		{ name: "Ruedas" },
		{ name: "Ropa" },
	];

	await Category.bulkCreate(categories);
	console.log("Las categorías fueron creadas");
};
