const { Order, Product, User } = require("../models");

async function index(req, res) {
  const orders = await Order.findAll({ where: { userId: req.user.id } });
  if (orders) {
    res.status(200).json(orders);
  } else {
    res.status(404).json("Ocurrio un error");
  }
}

async function show(req, res) {
  const { id } = req.params;
  const order = await Order.findOne({ where: { id: id, userId: req.user.id } });

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json("Ocurrio un error");
  }
}

async function store(req, res) {
  const { id } = req.user;
  console.log(req.body);
  try {
    if (req.body) {
      const user = await User.findByPk(id);
      let precioTotal = 0;
      for (const order of req.body.orderList) {
        precioTotal += order.price;
        console.log(precioTotal);
      }

      const newOrder = await Order.create({
        productList: [{ ...req.body.orderList }],
        userId: user.id,
        address: user.address,
        totalPrice: precioTotal,
      });

      res.status(200).json(newOrder);
    }
    res.status(404).json("Ocurrio un error");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { index, show, store };
