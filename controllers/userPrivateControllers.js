const { Order, Product, User, Address } = require("../models");

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

async function postOrder(req, res) {
  const { id } = req.user;
  console.log(req.user);
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

async function getAddresses(req, res) {
  const { id } = req.user;
  const adresses = await Adress.findAll({ where: { userId: id } });
  if (adresses) {
    res.status(200).json(adresses);
  } else {
    res.status(404).json("Ocurrio un error");
  }
}

async function postAddress(req, res) {
  if (req.body) {
    const newAddress = await Address.create(req.body);
    res.status(200).json(newAddress);
  } else {
    res
      .status(400)
      .json({ message: "Oucrrio un error al momento de crear el producto" });
  }
}

async function destroyAddress(req, res) {
  const { id } = req.body;
  try {
    const addressDeleted = await Adress.destroy({ where: { id: id } });
    res.status(200).json({
      message: "La siguente dirreccion fue eleiminada: " + addressDeleted,
    });
  } catch (error) {
    res.status(404).json({ message: "Algo malo paso D:" + error });
  }
}

module.exports = {
  index,
  show,
  postOrder,
  getAddresses,
  postAddress,
  destroyAddress,
};
