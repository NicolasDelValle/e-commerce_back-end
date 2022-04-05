const { Order } = require("../models");

module.exports = async () => {
	const orders = [
		{
			productList: ["mesa", "silla", "cama"],
			status: "Enviado",
			address: "Rivera 1234",
			totalPrice: 10000,
		},
	];

	await Order.bulkCreate(orders);
	console.log("[Seeders] Las órdenes fueron creadas");
};
