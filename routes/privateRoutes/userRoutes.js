const express = require("express");
const userRouter = express.Router();
const {
  getUserOrders,
  getUserOrder,
  postOrder,
  getAddresses,
  postAddress,
  destroyAddress,
} = require("../../controllers/userPrivateControllers");
const checkJwt = require("express-jwt");
userRouter.use(
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] })
);
//Retorna el historial de compras
userRouter.get("/orders", getUserOrders);
// Muestra un pedido
userRouter.get("/orders/:id", getUserOrder);
//Realizar un pedido
userRouter.post("/orders", postOrder);
//retorna todas las direcciones de un usuario
userRouter.get("/address", getAddresses);
//ingresa una nueva direccion
userRouter.post("/address", postAddress);
//borra una dirreccion
userRouter.delete("/address", destroyAddress);

module.exports = userRouter;
