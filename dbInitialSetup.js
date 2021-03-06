const db = require("./models");
module.exports = async () => {
	// Crear tablas:
	await db.sequelize.sync({ force: true });
	console.log("[Database] ¡Las tablas fueron creadas!");

	await require("./seeders/categoriesSeeder")();

	await require("./seeders/productsSeeder")();

	await require("./seeders/userSeeder")();
	await require("./seeders/newRealeaseSeeder")();

	await require("./seeders/addressSeeder")();

	await require("./seeders/ordersSeeder")();
};
