const express = require("express");
const adminRouter = express.Router();
const {
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
	showOrder,
	updateOrder,
} = require("../../controllers/adminPrivateControllers");
const checkJwt = require("express-jwt");
adminRouter.use(
	checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] })
);
const { isAdmin } = require("../../middlewares/isAdmin");

// Listar todos los usuarios
adminRouter.get("/users", isAdmin, index);
//Listar un usuario
adminRouter.get("/users/:id", isAdmin, show);
// Editar un usuario
adminRouter.patch("/users/:id", isAdmin, updateUser);
//Borrar un usuario
adminRouter.delete("/users/:id", isAdmin, destroyUser);

// Crea un producto
adminRouter.post("/products", isAdmin, store);
// Borra un producto
adminRouter.delete("/products/:slug", isAdmin, destroyProduct);
// Edita un producto
adminRouter.patch("/products/:slug", isAdmin, updateProduct);

//Listar Categorias
adminRouter.get("/categories", isAdmin, indexCategories);
//ver una Categoria
adminRouter.get("/categories/:id", isAdmin, showCategory);
//Agregar Categoria
adminRouter.post("/categories", isAdmin, storeCategory);
//Editar categoria
adminRouter.patch("/categories", isAdmin, updateCategory);
//Borrar Categoria
adminRouter.delete("/categories", isAdmin, destroyCategory);

//Listar Órdenes
adminRouter.get("/orders", isAdmin, indexOrders);
// Ver una Órden
adminRouter.get("/orders/:id", isAdmin, showOrder);
// Editar una Órden
adminRouter.patch("/orders/:id", isAdmin, updateOrder);

module.exports = adminRouter;
