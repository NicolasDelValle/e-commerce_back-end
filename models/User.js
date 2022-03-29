const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model) => {
	class User extends Model {
		async validatePassword(pass) {
			return await bcrypt.compare(pass, this.password);
		}
	}

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
			},
			isAdmin: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				default: false,
			},
		},
		{
			sequelize,
			modelName: "user",
		}
	);

	// USAR FOR
	User.beforeBulkCreate(async (user, options) => {
		user.password = await bcrypt.hash(user.password, 4);
	});

	return User;
};
