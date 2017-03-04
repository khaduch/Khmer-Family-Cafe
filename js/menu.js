var menu = {
	"column1dishes" : [
		{
			"id": "beef-sticks",
			"name": "Beef Sticks (Quantity: 3)",
			"price": "$7.50",
			"description": "Traditional lemon grass seasoned beef kabobs with a side of pickled veggies.",
			"image": "images/dishes/beef-sticks.jpg",
			"altText": "beef-sticks"
		},
		{
			"id": "stuffed-chicken",
			"name": "Stuffed Chicken Wings (Quantity: 2)",
			"price": "$8.50",
			"description": "Cambodian style lemon grass seasoning and peanut stuffed chicken wing broiled to perfection.",
			"image": "images/dishes/stuffed-chicken.jpg",
			"altText": "stuffed-chicken"
		},
		{
			"id": "lot-cha",
			"name": "Lot Cha",
			"price": "$7.50",
			"description": "Cambodian style stir fried pin drop noodles with beef topped with a fried egg served with a side of special house sweet fish sauce.",
			"image": "images/dishes/lot-cha.jpg",
			"altText": "lot-cha"
		},
		{
			"id": "fried-chicken",
			"name": "Fried Chicken (Quantity: 6pc)",
			"price": "$6.00",
			"description": "Traditional seasoned battered fried chicken. Served with Sweet Sauce.",
			"image": "images/dishes/fried-chicken.jpg",
			"altText": "fried-chicken"
		},
		{
			"id": "chicken-patty",
			"name": "Chicken Patties (Quantity: 3 patties)",
			"price": "$5",
			"description": "Fried lemon grass seasoned chicken patty with side of pickled veggies.",
			"image": "images/dishes/chicken-patty.jpg",
			"altText": "chicken-patty"
		},
		{
			"id": "papaya-salad",
			"name": "Papaya Salad",
			"price": "$6.00",
			"description": "Savory hot green papaya salad with our home sauce suited to your taste.",
			"image": "images/dishes/papaya-salad.jpg",
			"altText": "papaya-salad"
		}
	],

	"column2dishes" : [
		{
			"id": "chow-mein",
			"name": "Combination Chow Mein",
			"price": "$7.50",
			"description": "Tradition stir fried noodles with combination of beef, chicken, and shrimp with your choice of spicy or no spicy.",
			"image": "images/dishes/chow-mein.jpg",
			"altText": "chow-mein"
		},
		{
			"id": "eggrolls",
			"name": "Eggrolls (Quantity: 6pc)",
			"price": "$3.00",
			"description": "Cambodian style crispy eggroll with vermicelli noodles, veggies, pork, and house seasoning served with sweet and sour sauce.",
			"image": "images/dishes/eggrolls.jpg",
			"altText": "eggrolls"
		},
		{
			"id": "Pahok-Ktiss",
			"name": "Pahok Ktiss",
			"price": "$8.50",
			"description": "Sweet and Spicy ground pork served with a side of fresh veggies and rice.",
			"image": "images/dishes/Pahok-Ktiss.jpg",
			"altText": "Pahok-Ktiss"
		},
		{
			"id": "fried-rice",
			"name": "Fried Rice",
			"price": "$7.50",
			"description": "Cambodian style house fried rice with combination of beef, chicken, and shrimp.",
			"image": "images/dishes/fried-rice.jpg",
			"altText": "Fried-Rice"
		},
		{
			"id": "pho",
			"name": "Combo Pho 'Kathiew'",
			"price": "$8.00",
			"description": "Traditional broth soup with rice noodle, herb, beef, shrimp, meatballs, and crab meat.",
			"image": "images/dishes/pho.jpg",
			"altText": "pho"
		},
		{
			"id": "spring-rolls",
			"name": "Spring Rolls (Quantity: 3 large rolls)",
			"price": "$6.00",
			"description": "Fresh veggies, shrimp, and pork wrapped in rice paper alongside with special house sweet fish sauce.",
			"image": "images/dishes/spring-rolls.jpg",
			"altText": "spring-rolls"
		},
		{
			"id": "chicken-beef-larb",
			"name": "Chicken/Beef Larb",
			"price": "$8.00",
			"description": "Spicy seasoned meat salad with your choice of chicken or beef with a side of fresh veggies.",
			"image": "images/dishes/chicken-beef-larb.jpg",
			"altText": "chicken-beef-larb"
		}
	],

	"desserts" : [
		{
			"id": "khmer-shaved-ice",
			"name": "khmer shaved ice",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/khmer-shaved-ice.jpg",
			"altText": "khmer-shaved-ice"
		},
		{
			"id": "shaved-ice",
			"name": "Shaved Ice Sundae",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/shaved-ice.jpg",
			"altText": "shaved-ice"
		}
	],

	"drinks" : [
		{
			"id": "boba",
			"name": "Boba",
			"price": "$3.50",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/boba.jpg",
			"altText": "boba"
		},
		{
			"id": "thai-tea",
			"name": "Thai Tea",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/drinks.jpg",
			"altText": "thai-tea"
		}
	]
}

menu.display = function(foodArray, pageLocation){
  foodArray.forEach(function(dish){
    var formattedPic = HTMLdishPic.replace("%data%", dish.image);
    var formattedName = HTMLdishName.replace("%data%", dish.name);
    var formattedPrice = HTMLdishPrice.replace("%data%", dish.price);
    var formattedDescription = HTMLdishDescription.replace("%data%", dish.description);

    var formattedFullDishPic = HTMLfulldishPic.replace("%data%", dish.image);

	var HTMLPriceAndDescription = '<div class="pricedescription">' + formattedDescription + formattedPrice + '</div>';

	var formattedModalBody = '<div class="modal-body">' + formattedFullDishPic + formattedDescription + formattedPrice + '</div>'; 
    var formattedModalTitle = ModalTitle.replace("%data%", dish.name);

    var formattedModalHeader = ModalHeader.replace(ModalTitle, formattedModalTitle);
	var formattedModalContent = '<div class="modal-content">' + formattedModalHeader + formattedModalBody + ModalFooter + '</div>';
	var formattedModalDialog = ModalDialog.replace(ModalContent, formattedModalContent);

	var Modal = '<div class="modal fade" id="%data%" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' + formattedModalDialog + '</div>';
    var formattedModal = Modal.replace("%data%", dish.id);

    var HTMLdishInfoContainer = '<div class="menu-info">' + formattedName + HTMLPriceAndDescription + '</div>';
    var ModalTrigger = '<a data-toggle="modal" data-target="#%data%">' + formattedPic + '</a>';
	var formattedModalTrigger = ModalTrigger.replace("%data%", dish.id);

    var HTMLdishContainer = '<div class="row dish">' + formattedModalTrigger + formattedModal + HTMLdishInfoContainer + '</div>';

    $(pageLocation).append(HTMLdishContainer);
  });

};  

menu.display(menu.column1dishes, "#main-column-1");
menu.display(menu.column2dishes, "#main-column-2");
menu.display(menu.desserts, "#dessert-column");
menu.display(menu.drinks, "#drinks-column");