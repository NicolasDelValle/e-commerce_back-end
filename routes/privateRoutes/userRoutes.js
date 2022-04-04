const express = require("express");
const userRouter = express.Router();
const {
  index,
  show,
  store,
  getAdresses,
} = require("../../controllers/userPrivateControllers");
const checkJwt = require("express-jwt");
userRouter.use(
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] })
);

//Retorna el historial de compras
userRouter.get("/orders", index);
// Muestra un pedido
userRouter.get("/orders/:id", show);
//Realizar un pedido
userRouter.post("/orders", store);
//retorna todas las direcciones de un usuario
userRouter.get("/adress", getAdresses);

module.exports = userRouter;
