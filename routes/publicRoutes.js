const express = require("express");
const publicRouter = express.Router();

// Rutas del Públicas:
//registro
publicRouter.post("/users");
//Logueo
publicRouter.post("/tokens");
//Todos los productos
publicRouter.get("/products");
//Un producto
publicRouter.get("/products/:slug");

module.exports = publicRouter;
