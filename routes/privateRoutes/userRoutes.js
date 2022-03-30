const express = require("express");
const userRouter = express.Router();
const {
  index,
  show,
  store,
} = require("../../controllers/userPrivateControllers");

//Retorna el historial de compras
userRouter.get("/orders", index);
// Muestra un pedido
userRouter.get("/orders/:id", show);
//Realizar un pedido
userRouter.post("/orders", store);

module.exports = userRouter;
