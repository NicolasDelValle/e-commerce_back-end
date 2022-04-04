const { User } = require("../models");

module.exports = async () => {
  const users = [
    {
      firstname: "Admin",
      lastname: "Admin",
      email: "admin@mail.com",
      password: "1234",

      phone: 08002020,
      orderList: [],
      isAdmin: true,
    },
    {
      firstname: "Admin2",
      lastname: "Admin2",
      email: "admin2@mail.com",
      password: "1234",

      phone: 08004040,
      orderList: [],
      isAdmin: true,
    },
    {
      firstname: "Pepe",
      lastname: "González",
      email: "pepe@mail.com",
      password: "1234",

      phone: 08003020,
      orderList: [],
      isAdmin: false,
    },
    {
      firstname: "U",
      lastname: "U",
      email: "u@u.com",
      password: "1234",

      phone: 08001020,
      orderList: [],
      isAdmin: false,
    },
  ];

  await User.bulkCreate(users);
  console.log("[Seeders] Los usuarios fueron creados");
};
