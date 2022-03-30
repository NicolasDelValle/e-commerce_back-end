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
} = require("../../controllers/adminPrivateControllers");

// Listar todos los usuarios
adminRouter.get("/users", index);
//Listar un usario
adminRouter.get("/users/:id", show);
// Editar un usuario
adminRouter.patch("/users/:id", updateUser);
//Borrar un usuario
adminRouter.delete("/users/:id", destroyUser);
// Crea un producto
adminRouter.post("/products", store);
// Borra un producto
adminRouter.delete("/products/:slug", destroyProduct);
// Edita un producto
adminRouter.patch("/products/:slug", updateProduct);

module.exports = adminRouter;
