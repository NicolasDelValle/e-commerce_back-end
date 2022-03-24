module.exports = (sequelize, Model, DataTypes) => {
	class Category extends Model {}

	Category.init(
		{
			name: {
				type: DataTypes.String,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "category",
		}
	);

	return Category;
};
