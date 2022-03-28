const { Product } = require("../models");

module.exports = async () => {
	const products = [
		{
			name: "Tabla Cactus",
			description: "Tabla de skate Cactus, shape street de 7 láminas teñidas.",
			details: ["Maple canadiense", "Incluye lija y un sticker", "Medida 8.5'"],
			imageUrl:
				"https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/tablas/tablaDummy.png",
			stock: 100,
			price: 2600,
			featured: true,
			slug: "tabla-cactus",
			categoryId: 1,
		},
		{
			name: "Ruedas Losi 101a",
			description: "Ruedas duras",
			details: ["Silicona dura 101a", "53mm diámetro", "Estampado Losi"],
			imageUrl:
				"https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/hardware/176578197_1041929339671235_4247878052830658536_n.jpg",
			stock: 100,
			price: 2100,
			featured: true,
			slug: "rueda-losi-101a",
			categoryId: 3,
		},
		{
			name: "Set Tornillos",
			description: "Tornillos y tuercas de acero pulido",
			details: ["Tornillo tipo allen", "Altura 1 pulgada"],
			imageUrl:
				"https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/hardware/176578197_1041929339671235_4247878052830658536_n.jpg",
			stock: 150,
			price: 400,
			featured: false,
			slug: "set-tornillos",
			categoryId: 2,
		},
		{
			name: "Pantalón Baggy",
			description: "Pantalón baggy chino",
			details: ["Baggy Style", "60% algodón, 40% poliéster"],
			imageUrl:
				"https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/ropa/Pant_negro_1.png",
			stock: 100,
			price: 1800,
			featured: false,
			slug: "pantalon-baggy",
			categoryId: 4,
		},
	];

	await Product.bulkCreate(products);
	console.log("Los productos fueron creados");
};
