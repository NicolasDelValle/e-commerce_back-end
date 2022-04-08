const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      productList: [
        { name: "Tabla Vallely Mammoth 9.5''", price: "5990", quantity: 1 },
        {
          name: "Tabla Element Nyjah On Point 8.1''",
          price: "4090",
          quantity: 2,
        },
        { name: "Tabla Jart Abstraction", price: "2200", quantity: 4 },
      ],
      userName: "juan ernesto",
      status: "Enviado",
      address: "Rivera 1234",
      totalPrice: "10000.123",
      userId: 4,
    },
    {
      productList: [
        { name: "Tabla Vallely Mammoth 9.5''", price: "5990", quantity: 1 },
        {
          name: "Tabla Element Nyjah On Point 8.1''",
          price: "4090",
          quantity: 2,
        },
        { name: "Tabla Jart Abstraction", price: "2200", quantity: 4 },
      ],
      userName: "juan ernesto",
      status: "Procesando",
      address: "Rivera 1234",
      totalPrice: "10000.123",
      userId: 4,
    },
    {
      productList: [
        { name: "Tabla Vallely Mammoth 9.5''", price: "5990", quantity: 1 },
        {
          name: "Tabla Element Nyjah On Point 8.1''",
          price: "4090",
          quantity: 2,
        },
        { name: "Tabla Jart Abstraction", price: "2200", quantity: 4 },
      ],
      userName: "juan ernesto",
      status: "Recibido",
      address:
        "UNA CALLE EN ROCHA, 123 - Rocha, NOSE UNS CIUDAD EN ROCHA - 99909",
      totalPrice: "10000.123",
      userId: 4,
    },
  ];

  await Order.bulkCreate(orders);
  console.log("[Seeders] Las órdenes fueron creadas");
};
