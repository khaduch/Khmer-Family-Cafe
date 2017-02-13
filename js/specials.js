var specials = {
	"special" : [
		{
			"id": "ba-baw",
			"name": "Ba Baw",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/ba-baw.jpg",
			"altText": "ba-baw"
		},
		{
			"id": "salaw-machu-youn",
			"name": "Salaw Machu Youn",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/Salaw-Machu-Youn.jpg",
			"altText": "Salaw-Machu-Youn"
		},
		{
			"id": "loc-lac",
			"name": "Loc Lac",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/Loc-Lac.jpg",
			"altText": "loc-lac"
		},
		{
			"id": "Vermicilli-bay-hoy",
			"name": "Vermicilli Bay Hoy",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/Vermicilli-bay-hoy.jpg",
			"altText": "Vermicilli-bay-hoy"
		},
		{
			"id": "Ban-Xeo",
			"name": "Ban Xeo",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/Ban-Xeo.jpg",
			"altText": "Ban-Xeo"
		},
		{
			"id": "chicken-curry",
			"name": "Chicken Curry",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/chicken-curry.jpg",
			"altText": "chicken-curry"
		},
		{
			"id": "pahlok-ktiss",
			"name": "Pahlok Ktiss",
			"price": "$5",
			"description": "Description of what's in the dish and how it's cooked.",
			"image": "images/dishes/pahlok-ktiss.jpg",
			"altText": "pahlok-ktiss"
		}
	]
}

specials.display = function(specialsArray, CarouselLocation) {
	specialsArray.forEach(function(special) {
	    var formattedName = HTMLdishName.replace("%data%", special.name);
	    var formattedPrice = HTMLdishPrice.replace("%data%", special.price);
		var formattedSpecialDescription = SpecialDescription.replace("%data%", special.description);
		var formattedFullDishPic = HTMLfulldishPic.replace("%data%", special.image);    

		var CarouselCell = '<div class="carousel-cell">' + formattedFullDishPic + formattedName + formattedSpecialDescription + formattedPrice + ModalOrderButton + '</div>';

		$(CarouselLocation).append(CarouselCell);

	});
};

specials.display(specials.special, "#carousel");