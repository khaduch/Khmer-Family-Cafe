var menu = {
	"column1dishes" : [
		{
			"id": "beef-sticks",
			"name": "Beef Sticks",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/beef-sticks.jpg",
			"altText": "beef-sticks"
		},
		{
			"id": "stuffed-chicken",
			"name": "Stuffed Chicken",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/stuffed-chicken.jpg",
			"altText": "stuffed-chicken"
		},
		{
			"id": "lot-cha",
			"name": "Lot Cha",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/lot-cha.jpg",
			"altText": "lot-cha"
		},
		{
			"id": "fried-chicken",
			"name": "Fried Chicken",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/fried-chicken.jpg",
			"altText": "fried-chicken"
		},
		{
			"id": "chicken-patty",
			"name": "Chicken Patty",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/chicken-patty.jpg",
			"altText": "chicken-patty"
		},
		{
			"id": "papaya-salad",
			"name": "Papaya Salad",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/papaya-salad.jpg",
			"altText": "papaya-salad"
		}
	],

	"column2dishes" : [
		{
			"id": "chow-mein",
			"name": "Chow Mein",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/chow-mein.jpg",
			"altText": "chow-mein"
		},
		{
			"id": "eggrolls",
			"name": "Eggrolls",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/eggrolls.jpg",
			"altText": "eggrolls"
		},
		{
			"id": "Beef-Pahlok",
			"name": "Beef Pahlok",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/Beef-Pahlok.jpg",
			"altText": "Beef-Pahlok"
		},
		{
			"id": "fried-rice",
			"name": "Fried Rice",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/fried-rice.jpg",
			"altText": "Fried-Rice"
		},
		{
			"id": "pho",
			"name": "Pho",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/pho.jpg",
			"altText": "pho"
		},
		{
			"id": "spring-rolls",
			"name": "Spring Rolls",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/spring-rolls.jpg",
			"altText": "spring-rolls"
		},
		{
			"id": "chicken-beef-larb",
			"name": "Chicken/Beef Larb",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
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
			"price": "$5",
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


    var formattedModal = Modal.replace("%data%", dish.id);
    var formattedModalTitle = ModalTitle.replace("%data%", dish.name);
	var formattedModalBody = '<div class="modal-body">' + formattedPic + formattedDescription + formattedPrice + '</div>';    

    var HTMLdishInfoContainer = '<div class="menu-info">' + formattedName + formattedDescription + formattedPrice + '</div>';
	var formattedModalTrigger = ModalTrigger.replace(HTMLdishPic, formattedPic);
    var HTMLdishContainer = '<div class="row dish">' + formattedModalTrigger + formattedModal + HTMLdishInfoContainer + '</div>';


     $(pageLocation).append(HTMLdishContainer);


  });

};  

menu.display(menu.column1dishes, "#main-column-1");
menu.display(menu.column2dishes, "#main-column-2");
menu.display(menu.desserts, "#dessert-column");
menu.display(menu.drinks, "#drinks-column");