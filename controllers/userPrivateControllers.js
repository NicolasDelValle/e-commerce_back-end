const { Order, Product, User, Address } = require("../models");

async function getUserOrders(req, res) {
  console.log("esto es la req");
  const orders = await Order.findAll({ where: { userId: req.user.id } });
  if (orders) {
    res.status(200).json(orders);
  } else {
    res.status(404).json("Ocurrió un error");
  }
}

async function getUserOrder(req, res) {
  const { id } = req.params;
  const order = await Order.findOne({ where: { id: id, userId: req.user.id } });

  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404).json("Ocurrió un error");
  }
}

async function postOrder(req, res) {
  console.log("este es el body :D ", req.body);
  const { id } = req.user;
  const { productList, address, totalPrice } = req.body;
  try {
    const user = await User.findByPk(id);
    const userName = user.dataValues.firstname + " " + user.dataValues.lastname;

    const newOrder = await Order.create({
      productList: productList,
      userName: userName,
      address: address,
      totalPrice: totalPrice,
      userId: user.id,
    });

    res.status(200).json(newOrder);
  } catch (error) {
    res.status(404).json("Ocurrió un error");
    console.log(error);
  }
}

async function getAddresses(req, res) {
  const { id } = req.user;
  const addresses = await Address.findAll({ where: { userId: id } });
  if (addresses) {
    res.status(200).json(addresses);
  } else {
    res.status(404).json("Ocurrió un error");
  }
}

async function postAddress(req, res) {
  if (req.body) {
    const newAddress = await Address.create(req.body);
    res.status(200).json(newAddress);
  } else {
    res
      .status(400)
      .json({ message: "Ocurrió un error al momento de crear el producto" });
  }
}

async function destroyAddress(req, res) {
  const { id } = req.body;
  console.log(req.body);
  try {
    const addressDeleted = await Address.destroy({ where: { id: id } });
    res.status(200).json({
      message: "La siguente dirrección fue eliminada: " + addressDeleted,
    });
  } catch (error) {
    res.status(404).json({ message: "Algo malo pasó D:" + error });
  }
}

module.exports = {
  getUserOrders,
  getUserOrder,
  postOrder,
  getAddresses,
  postAddress,
  destroyAddress,
};
