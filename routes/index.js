const publicRoutes = require("./publicRoutes");
const adminRoutes = require("./privateRoutes/adminRoutes");
const userRoutes = require("./privateRoutes/userRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use("/admin", adminRoutes);
  app.use(userRoutes);
};
