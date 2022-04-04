const { Adress } = require("../models");

module.exports = async () => {
  const adress = [
    {
      name: "Casa",
      estate: "Montevideo",
      city: "Montevideo",
      adress: "Rivera, Bulevar",
      number: "303",
      postalCode: "11900",
      userId: 1,
    },
    {
      name: "Casa Juan",
      estate: "Montevideo",
      city: "Montevideo",
      adress: "LA.de herrera",
      number: "43",
      postalCode: "11900",
      userId: 3,
    },
    {
      name: "Trabajo",
      estate: "Montevideo",
      city: "Montevideo",
      adress: "Rivera",
      number: "355",
      postalCode: "11900",
      userId: 3,
    },
    {
      name: "Casa",
      estate: "Montevideo",
      city: "Montevideo",
      adress: "Rivera, Bulevar",
      number: "303",
      postalCode: "11900",
      userId: 2,
    },
  ];

  await Adress.bulkCreate(adress);
  console.log("[Seeders] Las direcciones fueron creados");
};
