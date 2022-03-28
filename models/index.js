const { Sequelize, Model } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const Category = require("./Category")(sequelize, Model);
const Product = require("./Product")(sequelize, Model);
const User = require("./User")(sequelize, Model);
const Order = require("./Order")(sequelize, Model);

User.hasMany(Order);
Order.belongsTo(User);
Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = { sequelize, User, Product, Category, Order };
