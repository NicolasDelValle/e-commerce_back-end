const express = require("express");
const adminRouter = express.Router();
const { index, show } = require("../../controllers/adminPrivateControllers");

// Listar todos los usuarios
adminRouter.get("/users", index);
//Listar un usario
adminRouter.get("/users/:id", show);
// Editar un usuario
adminRouter.put("/users/:id");
//Borrar un usuario
adminRouter.delete("/users/:id");
// Crea un producto
adminRouter.post("/products");
// Borra un producto
adminRouter.delete("/products/:slug");
// Edita un producto
adminRouter.put("/products/:slug");

module.exports = adminRouter;
