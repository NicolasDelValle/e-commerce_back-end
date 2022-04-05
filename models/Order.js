const { DataTypes } = require("sequelize");

module.exports = (sequelize, Model) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      productList: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      userName: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Procesando",
        validate: {
          isIn: [["Procesando", "Enviado"]],
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "order",
    }
  );

  return Order;
};
