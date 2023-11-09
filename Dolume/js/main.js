jQuery(document).ready(function ($) {

	//slideshow init (VENDOR: slick)
	$('.js-partners-carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		variableWidth: false
	});

});