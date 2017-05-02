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
	    }, 2000, 'swing', function () {
	        window.location.hash = target;
	    });


	});


});

$(".clearfix li").on('click', function () {
    $('.menu').toggleClass('open');
});