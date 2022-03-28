const { DataTypes } = require("sequelize");
// const { BOOLEAN } = require("sequelize/types");

module.exports = (sequelize, Model) => {
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
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      stock: {
        type: DataTypes.BIGINT,
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
