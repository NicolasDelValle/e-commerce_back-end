const express = require("express");
const publicRouter = express.Router();

// Rutas del Públicas:
//registro
userRouter.post("/users");
//Logueo
userRouter.post("/tokens");
//Todos los productos
userRouter.get("/products");
//Un producto
userRouter.get("/products/:slug");

module.exports = publicRouter;
