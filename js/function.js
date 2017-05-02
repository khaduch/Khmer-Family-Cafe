$(document).ready(function(){

	$('.hamburger').on('click', function () {
		$('.menu').toggleClass('open');
	});

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	    // if the input checkbox is checked, clear it to return the
	    // hamburger icon from the X shape to the hamburger
	    if ( $( ".hamburger input" ).attr( "checked", true )) { 
		// Uncheck the input
		$( ".hamburger input" ).attr( "checked", false );
	    }
	});


});

$(".clearfix li").on('click', function () {
    $('.menu').toggleClass('open');
});
