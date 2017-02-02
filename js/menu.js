var menu = {
	"dishes" : [
		{
			"name": "Beef Sticks",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/beef-sticks.jpg"],
			"altText": "beef-sticks"
		},
		{
			"name": "Stuffed Chicken",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/stuffed-chicken.jpg"],
			"altText": "stuffed-chicken"
		},
		{
			"name": "Lot Cha",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/lot-cha.jpg"],
			"altText": "lot-cha"
		},
		{
			"name": "Fried Chicken",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/fried-chicken.jpg"],
			"altText": "fried-chicken"
		},
		{
			"name": "Chicken Patty",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/chicken-patty.jpg"],
			"altText": "chicken-patty"
		},
		{
			"name": "Papaya Salad",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/papaya-salad.jpg"],
			"altText": "papaya-salad"
		},
		{
			"name": "Chow Mein",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/chow-mein.jpg"],
			"altText": "chow-mein"
		},
		{
			"name": "Eggrolls",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/eggrolls.jpg"],
			"altText": "eggrolls"
		},
		{
			"name": "Beef Pahlok",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/Beef-Pahlok.jpg"],
			"altText": "Beef-Pahlok"
		},
		{
			"name": "Fried Rice",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/fried-rice.jpg"],
			"altText": "Fried-Rice"
		},
		{
			"name": "Pho",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/pho.jpg"],
			"altText": "pho"
		},
		{
			"name": "Spring Rolls",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/spring-rolls.jpg"],
			"altText": "spring-rolls"
		},
		{
			"name": "Chicken/Beef Larb",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/chicken-beef-larb.jpg"],
			"altText": "chicken-beef-larb"
		},
		{
			"name": "khmer shaved ice",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/khmer-shaved-ice.jpg"],
			"altText": "khmer-shaved-ice"
		},
		{
			"name": "Shaved Ice Sundae",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/shaved-ice.jpg"],
			"altText": "shaved-ice"
		},
		{
			"name": "Boba",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/boba.jpg"],
			"altText": "boba"
		},
		{
			"name": "Thai Tea",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": ["images/dishes/drinks.jpg"],
			"altText": "drinks"
		}
	]
}





menu.display = function(){

var formattedPic = HTMLdishPic.replace("%data%", menu.dishes.image);






var formattedName = HTMLdishName.replace("%data%", menu.dishes.name);
var formattedPrice = HTMLdishPrice.replace("%data%", menu.dishes.price);
var formattedDescription = HTMLdishDescription.replace("%data%", menu.dishes.description);

		$("#main-column-1").append(HTMLdishContainer);







};



menu.display();







