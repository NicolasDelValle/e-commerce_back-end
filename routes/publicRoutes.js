const express = require("express");
const publicRouter = express.Router();
const {
  showProducts,
  showProduct,
  register,
} = require("../controllers/publicControllers");

const { createToken } = require("../controllers/apiTokenController");

// Rutas del Públicas:
//registro
publicRouter.post("/users", register);
//Logueo
publicRouter.post("/tokens", createToken);
//Todos los productos
publicRouter.get("/products", showProducts);
//Un producto
publicRouter.get("/products/:slug", showProduct);

module.exports = publicRouter;
