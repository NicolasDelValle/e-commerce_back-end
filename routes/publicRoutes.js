const express = require("express");
const publicRouter = express.Router();

// Rutas del Públicas:
publicRouter.post("/users");

publicRouter.post("/tokens");

publicRouter.get("/products");

publicRouter.get("/products/:slug");

module.exports = publicRouter;
