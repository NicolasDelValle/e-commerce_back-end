const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./privateRoutes/adminRoutes");
const userRoutes = require("./privateRoutes/userRoutes");
const checkJwt = require("express-jwt");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use(
    checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] })
  );
  app.use("/admin", adminRoutes);
  app.use(userRoutes);
};
