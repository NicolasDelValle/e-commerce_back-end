const { DataTypes } = require("sequelize");

module.exports = (sequelize, Model) => {
  class NewRelease extends Model {}

  NewRelease.init(
    {
      imageUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "newRelease",
    }
  );

  return NewRelease;
};
