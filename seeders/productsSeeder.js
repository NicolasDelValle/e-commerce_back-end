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
				"https://cybmmybwfbmxasdepuyj.supabase.co/storage/v1/object/public/images/hardware/tornillos.png",
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
		{
			name: "Tabla Girl Anderson 8.25''",
			description:
				"Con una tabla de Girl siempre estás bien equipado - tanto si prefieres patinar calle, parque o rampa. Lo cual también se debe a toda la gama de formas en las que están disponibles las tablas de la marca.",
			details: ["Medidas: 9.5'' x 32.375''", "Cóncavo: Mellow (bajo)"],
			imageUrl:
				"https://f.fcdn.app/imgs/002ac8/laisla.com.uy/isl/8741/webp/catalogo/CB4122-ROJCB4122-ROJ1/2000-2000/decks-girl-anderson-red-8-25-decks-girl-anderson-red-8-25.jpg",
			price: 5490,
			stock: 30,
			featured: true,
			slug: "tabla-girl-anderson",
			categoryId: 1,
		},
		{
			name: "Tabla Vallely Mammoth 9.5''",
			description:
				"Un gráfico único, lleno de colores que harán destacar tu estilo.",
			details: ["Medidas: 9.5'' x 32.375''", "Cóncavo: Mellow (bajo)"],
			imageUrl:
				"https://f.fcdn.app/imgs/9f74b6/laisla.com.uy/isl/fbb2/webp/catalogo/10072113-VER10072113-VER1/2000-2000/deck-vallely-mammoth-9-5-deck-vallely-mammoth-9-5.jpg",
			price: 5990,
			stock: 48,
			featured: false,
			slug: "tabla-vallely-mammoth",
			categoryId: 1,
		},
		{
			name: "Tabla Element Nyjah On Point 8.1''",
			description:
				"Construcción: 100% maple, 7 laminas de maple canadiense. Capas mas delgadas y resistentes para mayor ligereza.   Rendimiento cóncavo que agrega un toque adicional.",
			details: ["Tamaño 8.1'' x 31.25'' "],
			imageUrl:
				"https://f.fcdn.app/imgs/b1449c/laisla.com.uy/isl/dcb3/webp/catalogo/BDPRVNNPBDPRVNNP1/520x520/decks-element-nyjah-on-point-8-1-decks-element-nyjah-on-point-8-1.jpg",
			price: 5990,
			stock: 80,
			featured: false,
			slug: "tabla-element-nyjah-on-point",
			categoryId: 1,
		},
		{
			name: "Tabla Element Nyjah On Point 8.1''",
			description:
				"La Jart Danny Leon es una base de skateboard de calidad hecha de 7-ply de arce. La madera de arce duro dota a esta tabla de pop adicional y longevidad adicional. Una base que presenta una forma de popsicle con doble kick, que te ayuda a conseguir potentes ollies y nollies con confianza.",
			details: ["Cóncavo: Alto", "Distancia entre ejes: 36.1cm"],
			imageUrl:
				"https://cdn.skatepro.com/product/440/jart-danny-leon-skateboard-deck-av.jpg",
			price: 4090,
			stock: 10,
			featured: true,
			slug: "tabla-jart-danny-leon",
			categoryId: 1,
		},
		{
			name: "Tabla Santa Cruz Johnson Beach",
			description:
				"Santa Cruz Skateboards Blake Johnson Wolf Two deck con arte de Tallboy @tallboy666.   7 capas de arce norteamericano prensadas individualmente con epoxi que crean una plataforma fuerte y receptiva!",
			details: [
				"Material: 7 capas (Canadian Maple)",
				"Ancho: 8.375mm (21.3cm)",
				"Largo: 32mm (81.3 cm)",
				"Wheelbase: 14.19” (36 cm)",
			],
			imageUrl:
				"https://f.fcdn.app/imgs/d7c613/www.tiendarepublica.com/rep/e036/webp/catalogo/1931722450001931722450001/460x460/deck-santa-cruz-johnson-beach-wolf-two-8-375-solo-tabla-deck-santa-cruz-johnson-beach-wolf-two-8-375-solo-tabla.jpg",
			price: 4690,
			stock: 25,
			featured: false,
			slug: "tabla-santa-cruz-johnson-beach",
			categoryId: 1,
		},
		{
			name: "Ruedas Slime Balls Snot Rockets",
			description: "Ruedas Profesionales de Skate Slime Balls",
			details: [
				"Material: Uretano",
				"Diámetro 53 mm",
				"Ancho: 32 mm",
				"Dureza: 95a",
			],
			imageUrl:
				"https://f.fcdn.app/imgs/9750f8/www.tiendarepublica.com/rep/a491/webp/catalogo/1931722472951931722472951/460x460/ruedas-de-skate-slime-balls-snot-rockets-53mm-95a-pastel-blue-ruedas-de-skate-slime-balls-snot-rockets-53mm-95a-pastel-blue.jpg",
			price: 2290,
			stock: 140,
			featured: false,
			slug: "ruedas-slime-balls-snot-rockets",
			categoryId: 3,
		},
		{
			name: "Ruedas Spitfire Formula Four Classic",
			description: "Ruedas de calidad probada para un andar agradable.",
			details: [
				"Forma clásica",
				"forma atemporal probada, para la velocidad y el control",
				"alta resistencia a la abrasión y a flatspots",
				"deslizamiento antiadherente para un deslizamiento constante, rápido y suave",
			],
			imageUrl:
				"https://f.fcdn.app/imgs/ad59e8/www.tiendarepublica.com/rep/0749/webp/catalogo/1232911232911/460x460/ruedas-de-skate-spitfire-formula-four-classic-white-orange-53mm-99a-ruedas-de-skate-spitfire-formula-four-classic-white-orange-53mm-99a.jpg",
			price: 3190,
			stock: 99,
			featured: false,
			slug: "ruedas-spitfire-formula-classic",
			categoryId: 3,
		},
		{
			name: "Ruedas Kimbel Kegger Barrel Elite",
			description:
				"Las Kimbel Kegger Barrel Elite Mini Combo 101a OJ's 4-pack son un juego de ruedas para skateboards. El uretano utilizado en la fabricación de estás ruedas es de muy alta calidad, y las hace resistentes y aptas para pulir cualquier superficie. Estas ruedas medianas de 56mm son todo lo que necesitas tanto si lo tuyo es rodar por el asfalto como en el parque de skate.",
			details: [
				"Diámetro de las ruedas:56mm",
				"Dureza de las ruedas:101A",
				"Material de las ruedas:PU fundido",
			],
			imageUrl:
				"https://cdn.skatepro.com/product/440/oj-s-kimbel-kegger-barrel-elite-mini-combo-101a-skateboard-wheel-xu.jpg",
			price: 1750,
			stock: 60,
			featured: true,
			slug: "ruedas-kimbel-kegger-barrel",
			categoryId: 3,
		},
		{
			name: "Ruedas Slime Balls Brains Speed Balls",
			description: "Nuevo arte de Speed Balls por FALU (@falucarolei).",
			details: [
				"Borde cónico duro para un control máximo en cualquier terreno.",
				"Uretano 99a de alto rendimiento.",
			],
			imageUrl:
				"https://f.fcdn.app/imgs/8fae49/www.tiendarepublica.com/rep/726e/webp/catalogo/RuedaSlimeBallsBrains54mm99aRuedaSlimeBallsBrains54mm99a1/460x460/ruedas-de-skate-slime-balls-brains-speed-balls-54mm-99a-ruedas-de-skate-slime-balls-brains-speed-balls-54mm-99a.jpg",
			price: 2790,
			stock: 200,
			featured: false,
			slug: "ruedas-slime-balls-brains",
			categoryId: 3,
		},
		{
			name: "Truck Pivot 149mm white/black",
			description:
				"Fabricados en aluminio de excelente calidad y resistentes para altas exigencias y performances. Ofrecen buena respuesta en curvas, además de deslizar super bien en diferentes tipos de superficies como hierro o concreto, por ejemplo.",
			details: [
				"Truck Pivot 149mm color white/black",
				"Bushing dureza 95a",
				"Truck alto",
			],
			imageUrl:
				"https://f.fcdn.app/imgs/50534f/www.tiendarepublica.com/rep/1a5a/webp/catalogo/TruckSkateboardPivot149mmTruckSkateboardPivot149mm1/460x460/truck-skateboard-pivot-149mm-white-black-truck-skateboard-pivot-149mm-white-black.jpg",
			price: 2390,
			stock: 150,
			featured: false,
			slug: "truck-skateboard-pivot-149mm-wb",
			categoryId: 2,
		},
		{
			name: "Truck Minilogo 139mm Black",
			description:
				"Producido en la misma fabrica que la legendaria marca de skate, mini logo reduce costos de merchandising y  diseños de truck para conseguir la mejor calidad al mejor precio de venta.",
			details: ["Set de 2 trucks", "139mm"],
			imageUrl:
				"https://f.fcdn.app/imgs/dbbd00/www.tiendarepublica.com/rep/80eb/webp/catalogo/8455840318488455840318481/460x460/truck-de-skate-minilogo-139mm-black-truck-de-skate-minilogo-139mm-black.jpg",
			price: 2990,
			stock: 98,
			featured: true,
			slug: "truck-skate-minilogo-139mm-b",
			categoryId: 2,
		},
		{
			name: "Truck Thunder Polished 148mm",
			description:
				"Fundada en 1986 por Fausto Vitello y Brian Ware como parte de Deluxe Distribution (Real, Krooked, Antihero, Venture y Spitfire), Thunder Trucks se creó con la idea de fabricar los ejes de skate con mejor rendimiento. Desde que se lanzaron los primeros productos Thunder, un número cada vez mayor de skaters profesionales se han unido a la empresa como skaters y han añadido ejes de skate Thunder a sus tablas.",
			details: [
				"Sugerimos usar estos truck en tablas con un ancho de 8.125 - 8.375mm.",
			],
			imageUrl:
				"https://f.fcdn.app/imgs/8dd39b/www.tiendarepublica.com/rep/7f16/webp/catalogo/TRUCKDESKATETHUNDERPOLISHED148TRUCKDESKATETHUNDERPOLISHED1481/460x460/truck-de-skate-thunder-polished-148-s-truck-de-skate-thunder-polished-148-s.jpg",
			price: 4090,
			stock: 40,
			featured: false,
			slug: "truck-thunder-polished-148mm",
			categoryId: 2,
		},
	];

	await Product.bulkCreate(products);
	console.log("[Seeders] Los productos fueron creados");
};
