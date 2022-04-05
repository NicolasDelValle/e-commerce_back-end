const { Address } = require("../models");

module.exports = async () => {
  const address = [
    {
      name: "Casa",
      state: "Montevideo",
      city: "Montevideo",
      address: "Rivera, Bulevar",
      number: "303",
      postalCode: "11900",
      userId: 1,
    },
    {
      name: "Casa Juan",
      state: "Montevideo",
      city: "Montevideo",
      address: "LA.de herrera",
      number: "43",
      postalCode: "11900",
      userId: 3,
    },
    {
      name: "Trabajo",
      state: "Montevideo",
      city: "Montevideo",
      address: "Rivera",
      number: "355",
      postalCode: "11900",
      userId: 3,
    },
    {
      name: "Casa",
      state: "Montevideo",
      city: "Montevideo",
      address: "Rivera, Bulevar",
      number: "303",
      postalCode: "11900",
      userId: 2,
    },
  ];

  await Address.bulkCreate(address);
  console.log("[Seeders] Las direcciones fueron creados");
};
