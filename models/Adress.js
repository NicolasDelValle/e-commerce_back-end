const { DataTypes } = require("sequelize");

module.exports = (sequelize, Model) => {
  class Adress extends Model {}

  Adress.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      adress: {
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
      modelName: "adress",
    }
  );

  return Adress;
};
