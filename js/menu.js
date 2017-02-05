var menu = {
	"column1dishes" : [
		{
			"name": "Beef Sticks",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/beef-sticks.jpg",
			"altText": "beef-sticks"
		},
		{
			"name": "Stuffed Chicken",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/stuffed-chicken.jpg",
			"altText": "stuffed-chicken"
		},
		{
			"name": "Lot Cha",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/lot-cha.jpg",
			"altText": "lot-cha"
		},
		{
			"name": "Fried Chicken",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/fried-chicken.jpg",
			"altText": "fried-chicken"
		},
		{
			"name": "Chicken Patty",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/chicken-patty.jpg",
			"altText": "chicken-patty"
		},
		{
			"name": "Papaya Salad",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/papaya-salad.jpg",
			"altText": "papaya-salad"
		}
	],

	"column2dishes" : [
		{
			"name": "Chow Mein",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/chow-mein.jpg",
			"altText": "chow-mein"
		},
		{
			"name": "Eggrolls",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/eggrolls.jpg",
			"altText": "eggrolls"
		},
		{
			"name": "Beef Pahlok",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/Beef-Pahlok.jpg",
			"altText": "Beef-Pahlok"
		},
		{
			"name": "Fried Rice",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/fried-rice.jpg",
			"altText": "Fried-Rice"
		},
		{
			"name": "Pho",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/pho.jpg",
			"altText": "pho"
		},
		{
			"name": "Spring Rolls",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/spring-rolls.jpg",
			"altText": "spring-rolls"
		},
		{
			"name": "Chicken/Beef Larb",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/chicken-beef-larb.jpg",
			"altText": "chicken-beef-larb"
		}
	],

	"desserts" : [
		{
			"name": "khmer shaved ice",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/khmer-shaved-ice.jpg",
			"altText": "khmer-shaved-ice"
		},
		{
			"name": "Shaved Ice Sundae",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/shaved-ice.jpg",
			"altText": "shaved-ice"
		}
	],

	"drinks" : [
		{
			"name": "Boba",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/boba.jpg",
			"altText": "boba"
		},
		{
			"name": "Thai Tea",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/drinks.jpg",
			"altText": "drinks"
		}
	]
}

menu.display = function(){
	for (var column1dish in menu.column1dishes) {
		var formattedPic = HTMLdishPic.replace("%data%", menu.column1dishes[column1dish].image);
		var formattedName = HTMLdishName.replace("%data%", menu.column1dishes[column1dish].name);
		var formattedPrice = HTMLdishPrice.replace("%data%", menu.column1dishes[column1dish].price);
		var formattedDescription = HTMLdishDescription.replace("%data%", menu.column1dishes[column1dish].description);

		var HTMLdishInfoContainer = '<div class="menu-info">' + formattedName + formattedDescription + formattedPrice + '</div>';
		var HTMLdishContainer = '<div class="row dish">' + formattedPic + HTMLdishInfoContainer + '</div>';

		$("#main-column-1").append(HTMLdishContainer);	
	}

		for (var column2dish in menu.column2dishes) {
		var formattedPic = HTMLdishPic.replace("%data%", menu.column2dishes[column2dish].image);
		var formattedName = HTMLdishName.replace("%data%", menu.column2dishes[column2dish].name);
		var formattedPrice = HTMLdishPrice.replace("%data%", menu.column2dishes[column2dish].price);
		var formattedDescription = HTMLdishDescription.replace("%data%", menu.column2dishes[column2dish].description);

		var HTMLdishInfoContainer = '<div class="menu-info">' + formattedName + formattedDescription + formattedPrice + '</div>';
		var HTMLdishContainer = '<div class="row dish">' + formattedPic + HTMLdishInfoContainer + '</div>';

		$("#main-column-2").append(HTMLdishContainer);	
	}

		for (var dessert in menu.desserts) {
		var formattedPic = HTMLdishPic.replace("%data%", menu.desserts[dessert].image);
		var formattedName = HTMLdishName.replace("%data%", menu.desserts[dessert].name);
		var formattedPrice = HTMLdishPrice.replace("%data%", menu.desserts[dessert].price);
		var formattedDescription = HTMLdishDescription.replace("%data%", menu.desserts[dessert].description);

		var HTMLdishInfoContainer = '<div class="menu-info">' + formattedName + formattedDescription + formattedPrice + '</div>';
		var HTMLdishContainer = '<div class="row dish">' + formattedPic + HTMLdishInfoContainer + '</div>';

		$("#dessert-column").append(HTMLdishContainer);	
	}

		for (var drink in menu.drinks) {
		var formattedPic = HTMLdishPic.replace("%data%", menu.drinks[drink].image);
		var formattedName = HTMLdishName.replace("%data%", menu.drinks[drink].name);
		var formattedPrice = HTMLdishPrice.replace("%data%", menu.drinks[drink].price);
		var formattedDescription = HTMLdishDescription.replace("%data%", menu.drinks[drink].description);

		var HTMLdishInfoContainer = '<div class="menu-info">' + formattedName + formattedDescription + formattedPrice + '</div>';
		var HTMLdishContainer = '<div class="row dish">' + formattedPic + HTMLdishInfoContainer + '</div>';

		$("#drinks-column").append(HTMLdishContainer);	
	}
};

menu.display();