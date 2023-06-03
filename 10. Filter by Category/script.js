let products = [
	{ name: "Shirts", category: "Clothing" },
	{ name: "Pants", category: "Clothing" },
	{ name: "Hats", category: "Accessories" },
	{ name: "Sunglasses", category: "Accessories" },
];

function filterByCategory(products) {
	return function (category) {
		return products.filter((product) => {
			return product.category == category;
		});
	};
}

let clothingProdcuts = filterByCategory(products)("Clothing");
console.log(clothingProdcuts);