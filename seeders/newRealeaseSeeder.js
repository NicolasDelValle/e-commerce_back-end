const { NewRelease } = require("../models");

module.exports = async () => {
  const newRelease = [
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2291/8079/products/MASON-PRO-DANGER_grande.png?v=1617837873",
    },
    {
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2291/8079/products/CASCADE-NINETY-FIVE_43c0200a-1b12-40fd-bc61-f240ae6ed229_1200x.png?v=1617733516",
    },
  ];

  await NewRelease.bulkCreate(newRelease);
  console.log("[Seeders] Los new releases fueron creados");
};
