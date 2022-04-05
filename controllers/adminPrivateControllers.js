const { createClient } = require("@supabase/supabase-js");
const { User, Product, Category, Order } = require("../models");
const fs = require("fs");
const formidable = require("formidable");

//Lista de todos los usuarios
async function index(req, res) {
	const users = await User.findAll();
	if (users) {
		res.status(200).json(users);
	} else {
		res.status(404).json("No se ha encontrado la lista de usuarios indicado");
	}
}
//un solo usuario
async function show(req, res) {
	const { id } = req.params;
	const user = await User.findByPk(id);
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404).json("No se ha encontrado el usuario indicado");
	}
}

//actualizar usuario
async function updateUser(req, res) {
	const { id } = req.params;
	try {
		const userUpdated = await User.findByPk(id);

		if (!userUpdated) {
			res.status(404).json({ message: `No existe usuario indicado` });
		} else {
			userUpdated.isAdmin = !userUpdated.isAdmin;
			userUpdated.save();

			res.status(200).json(userUpdated);
		}
	} catch (err) {
		res.status(404).json("No se encuentra" + " " + err);
	}
}

//eliminar usuario
async function destroyUser(req, res) {
	try {
		const { id } = req.params;
		const user = await User.findByPk(id);
		if (user) {
			await User.destroy({
				where: { id: id },
			});
			res.status(200).json({ message: `El usuario fue eliminado` });
		} else {
			res.status(404).json({ message: "El usuario indicado no existe" });
		}
	} catch (err) {
		res.status(404).json({ message: "Usuario no encontrado o token incorrecto" });
	}
}

//crear un producto
async function store(req, res) {
	try {
		const form = formidable({
			multiples: false,
			keepExtensions: true,
		});
		form.parse(req, async (err, fields, files) => {
			const supabase = createClient(
				process.env.SUPABASE_URL,
				process.env.SUPABASE_KEY
			);

			const newFileName = files.imageUrl.newFilename;
			const { data, error } = await supabase.storage
				.from("images")
				.upload(newFileName, fs.createReadStream(files.imageUrl.filepath), {
					cacheControl: "3600",
					upsert: false,
					contentType: files.imageUrl.mimetype,
				});
			const details = fields.details.split(";");

			const newProduct = await Product.create({
				...fields,
				details: details,
				imageUrl: files.imageUrl.newFilename,
			});
			if (error) {
				res.status(400).json({
					message: "Ocurrio un error al momento de crear el producto",
				});
			}

			res.json(newProduct);
		});
	} catch (error) {
		res
			.status(400)
			.json({ message: "Ocurrio un error al momento de crear el producto" });
	}
}
//actualizar producto
async function updateProduct(req, res) {
	const { slug } = req.params;

	try {
		const productUpdated = await Product.findOne({ where: { slug: slug } });

		if (productUpdated) {
			productUpdated.update(req.body);
			res.status(200).json(productUpdated);
		} else {
			res.status(404).json({ message: `No existe producto` });
		}
	} catch (err) {
		res.status(404).json(err);
	}
}
//eliminar producto
async function destroyProduct(req, res) {
	const { slug } = req.params;

	const productDelete = await Product.findOne({ where: { slug: slug } });

	if (productDelete) {
		const productDelete = await Product.destroy({ where: { slug: slug } });
		res
			.status(200)
			.json({ message: "El siguiente producto fue eliminado" + productDelete });
	} else {
		res.status(404).json({ message: "Producto no encontrado" });
	}
}

//ver categorias
async function indexCategories(req, res) {
	try {
		const categories = await Category.findAll();

		if (categories) {
			res.status(200).json(categories);
		} else {
			res.status(404).json({ message: `No existen categorias` });
		}
	} catch (err) {
		res.status(404).json(err);
	}
}
//ver una categoria
async function showCategory(req, res) {
	const { id } = req.params;
	try {
		const category = await Category.findByPk(id);

		if (category) {
			res.status(200).json(category);
		} else {
			res.status(404).json({ message: `No existe la categoria` });
		}
	} catch (err) {
		res.status(404).json(err);
	}
}
//agregar una categoria
async function storeCategory(req, res) {
	if (req.body) {
		const newProduct = await Category.create(req.body);
		res.status(200).json(newProduct);
	} else {
		res
			.status(400)
			.json({ message: "Oucrrio un error al momento de crear la categoria" });
	}
}
//actualizar categorias
async function updateCategory(req, res) {
	const { id } = req.params;

	try {
		const editCategory = await Category.findOne({ where: { id: id } });

		if (editCategory) {
			editCategory.update(req.body);
			res.status(200).json(editCategory);
		} else {
			res.status(404).json({ message: `No existe la categoria indicada` });
		}
	} catch (err) {
		res.status(404).json(err);
	}
}
//eliminar categorias
async function destroyCategory(req, res) {
	try {
		const { id } = req.params;
		const category = await Category.findByPk(id);
		if (category) {
			await Category.destroy({
				where: { id: id },
			});
			res.status(200).json({ message: `La categoria fue eliminado` });
		} else {
			res.status(404).json({ message: "La categoria indicado no existe" });
		}
	} catch (err) {
		res.status(404).json({ message: "Categoria no encontrada o incorrecta" });
	}
}

//Listar órdenes
async function indexOrders(req, res) {
	try {
		const orders = await Order.findAll();
		if (orders) {
			res.status(200).json(orders);
		} else {
			res.status(404).json({ message: `No existen órdenes` });
		}
	} catch (err) {
		res.status(404).json(err);
	}
}
module.exports = {
	index,
	show,
	updateUser,
	destroyUser,
	store,
	destroyProduct,
	updateProduct,
	indexCategories,
	showCategory,
	storeCategory,
	updateCategory,
	destroyCategory,
	indexOrders,
};
