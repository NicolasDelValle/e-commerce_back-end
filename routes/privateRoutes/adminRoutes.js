const express = require("express");
const adminRouter = express.Router();
const {
  index,
  show,
  update,
  destroy,
} = require("../../controllers/adminPrivateControllers");

// Listar todos los usuarios
adminRouter.get("/users", index);
//Listar un usario
adminRouter.get("/users/:id", show);
// Editar un usuario
adminRouter.patch("/users/:id", update);
//Borrar un usuario
adminRouter.delete("/users/:id", destroy);
// Crea un producto
adminRouter.post("/products");
// Borra un producto
adminRouter.delete("/products/:slug");
// Edita un producto
adminRouter.patch("/products/:slug");

module.exports = adminRouter;
