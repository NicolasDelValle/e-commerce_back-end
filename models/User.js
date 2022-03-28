const { DataTypes } = require("sequelize");

module.exports = (sequelize, Model) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
      },
      orderList: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  return User;
};
