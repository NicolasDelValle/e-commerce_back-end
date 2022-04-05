const { DataTypes } = require("sequelize");

module.exports = (sequelize, Model) => {
  class Address extends Model {}

  Address.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "address",
    }
  );

  return Address;
};
