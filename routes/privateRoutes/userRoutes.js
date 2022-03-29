const express = require("express");
const userRouter = express.Router();

// Rutas del Públicas:
//Realizar un pedido
userRouter.post("/order");
// Muestra un pedido
userRouter.get("/order/:id");
//Retorna el historial de compras
userRouter.get("/user/histoy");

module.exports = userRouter;
