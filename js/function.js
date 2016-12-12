// listen for when the user clicks on the hamburger icon //
$('.hamburger').on('click', function () {
	//if menu is open, slide up

	/*
	if ($('.menu').hasClass('open')) {
		$('.menu').removeClass('open');
	} else {
	// if menu is closed, slide down
		$('.menu').addClass('open');
	}
	*/

	$('.menu').toggleClass('open');
});