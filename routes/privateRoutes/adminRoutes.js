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
const checkJwt = require("express-jwt");
adminRouter.use(
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] })
);
const { isAdmin } = require("../../middlewares/isAdmin");

// Listar todos los usuarios
adminRouter.get("/users", isAdmin, index);
//Listar un usario
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

module.exports = adminRouter;
