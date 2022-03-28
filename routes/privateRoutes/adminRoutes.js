const express = require("express");
const adminRouter = express.Router();

// Rutas del Públicas:
// Listar todos los usuarios
adminRouter.get("/admin/users");
//Listar un usario
adminRouter.get("/admin/users/:id");
// Editar un usuario
adminRouter.put("/admin/users/:id");
//Borrar un usuario
adminRouter.delete("/admin/users/:id");
// Crea un producto
adminRouter.post("/admin/products");
// Borra un producto
adminRouter.delete("/admin/admin/products/:slug");
// Edita un producto
adminRouter.put("/admin/products/:slug");

module.exports = adminRouter;
