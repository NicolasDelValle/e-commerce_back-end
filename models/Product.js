const { type } = require("express/lib/response");
const { BOOLEAN } = require("sequelize/types");

module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      details: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL.UNSIGNED,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INT.UNSIGNED,
        allowNull: false,
      },
      featured: {
        type: DataTypes.BOOLEAN,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );

  return Product;
};
