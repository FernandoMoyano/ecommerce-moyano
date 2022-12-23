let products = [
	{
		id: "1",
		name: "MONITOR 19 LED PHILIPS 193V5LHSB2/55 HDMI",
		price: "$ 20.699",
		category: "monitores",
		img: "https://www.venex.com.ar/products_images/thumb/1585889887_monitor_19_led_philips_193v5lhsb2_55_hdmi.jpg",
		stock: "25",
		description: "Tipo de retroiluminación Sistema W-LED",
	},

	{
		id: "2",
		name: "MONITOR 20 HP P204V HDMI 5RD66AA",
		price: "$ 23.099",
		category: "monitores",
		img: "https://www.venex.com.ar/products_images/thumb/1645044944_fghfghj.jpg",
		stock: 16,
		description: 'Diagonal de la pantalla 49,5 cm (19.5").',
	},

	{
		id: "3",
		name: "MONITOR 20 LED LG 20MK400H-B HDMI HD 75HZ",
		price: "$ 23.299",
		category: "monitores",
		img: "https://www.venex.com.ar/products_images/thumb/1602012560_1572276238_fyl8.jpg",
		stock: 10,
		description: 'Tamaño (Pulgada) 19.5" / 49.4cm ',
	},

	{
		id: "4",
		name: "MONITOR 27 PHILIPS CURVO 27E1SCA/55 FULL HD",
		price: "$62.990",
		category: "monitores",
		img: "https://www.venex.com.ar/products_images/1639157228_moni.png",
		stock: 10,
		description: "Tipo de panel: LCD VA Tipo de retroiluminación:Sistema W-LED"
	
	},

	{
		id: "5",
		name: "PLACA DE VIDEO MSI GEFORCE GT 710 1GB DDR3",
		price: "$8.799",
		category: "placas de video",
		img: "https://www.venex.com.ar/products_images/thumb/1477928102_gt710msi.jpg",
		stock: 25,
		description: "Temperaturas más bajas y mayor eficiencia, Extrema baja ESR, Sin ruido.",
	},

	{
		id: "6",
		name: "PLACA DE VIDEO ASUS TUF RADEON RX 6500 XT O4G",
		price: "$89.799",
		category: "placas de video",
		img: "https://www.venex.com.ar/products_images/1648655727_hfghfgh.png",
		stock: 25,
		description: "Radeon RX 6500 XT, PCI Express 4.0, OpenGL4.6® GDDR6 DE 4 GB",
	},

	{
		id: "7",
		name: "PLACA DE VIDEO PALIT NVIDIA GEFORCE GT 710 2GB DDR3",
		price: "$9.239",
		category: "placas de video",
		img: "https://www.venex.com.ar/products_images/thumb/1600086910_p03387_bigimage_15905d53855e324fb.jpg",
		stock: 16,
		description: "Cantidad de memoria: 2048MB, Interfaz de memoria: 64 bits Tipo de DRAM: DDR3",
	},

	{
		id: "8",
		name: "PLACA DE VIDEO POWERCOLOR RX550 ",
		price: "$15.864",
		category: "placas de video",
		img: "https://www.venex.com.ar/products_images/thumb/1645545226_2112161734340.jpg",
		stock: 10,
		description: "Motor gráfico: AXRX 550 4GBD5-HLE, Memoria de vídeo: GDDR5 DE 4 GB",
	},

	{
		id: "9",
		name: "SILLA GAMER AEROCOOL ADMIRAL CHAMPION RED",
		price: "$44.456",
		category: "butacas",
		img: "https://www.venex.com.ar/products_images/thumb/1648830906_ghgh.jpg",
		stock: 25,
		description: "Peso máximo: <150 kg, Peso recomendado: <125 kg",
	},

	{
		id: "10",
		name: "SILLA GAMER AEROCOOL ADMIRAL SMOOKY BLACK",
		price: "$48.288",
		category: "butacas",
		img: "https://www.venex.com.ar/products_images/thumb/1648829712_silla.jpg",
		stock: 7,
		description: "Peso máximo: <150 kg, Peso recomendado: <125 kg",
	},

	{
		id: "11",
		name: "SILLA GAMER AEROCOOL GUARDION CHAMPION RED",
		price: "$52.376",
		category: "butacas",
		img: "https://www.venex.com.ar/products_images/thumb/1641236068_8.jpg",
		stock: 10,
		description: "Peso máximo: <150 kg / 330 libras, Peso recomendado: <125 kg / 275 libras",
	},

	{
		id: "12",
		name: "SILLA GAMER ANTEC T1 SPORT NEGRA/AMARILLO",
		price: "$86.376",
		category: "butacas",
		img: "https://www.venex.com.ar/products_images/1671127033_amarilla-1.jpg",
		stock: 10,
		description: "-Carga máxima de peso: 113 kg/250 libras, -Tipo de espuma: Acolchado de espuma densa",
	},
];

//Obtener todos los productos

export const getProducts = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(products);
		}, 1000);
	});
};

export const getProductById = (id) => {
	return new Promise((resuleto, rechazada) => {
		setTimeout(() => {
			resuleto(id ? products.find((item) => item.id === id) : products);
		}, 1000);
	});
};

