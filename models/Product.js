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
      Description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      Price: {
        type: DataTypes.DECIMAL.UNSIGNED,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INT.UNSIGNED,
        allowNull: false,
      },
      featured: {
        type: BOOLEAN,
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
