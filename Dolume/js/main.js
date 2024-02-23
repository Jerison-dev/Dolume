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

//navbar

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav ul li a')



window.onscroll = function(){
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset+height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}










//navbar

// // Smooth Scrolling for internal links
// $('a[href^="#"]').on("click",function (e) {
// 	e.preventDefault();

// 	var target = this.hash;
// 	var $target = $(target);

// 	$("html, body").stop().animate({
// 		"scrollTop": $target.offset().top
// 	}, 900, 'swing', function () {
// 		window.location.hash = target;
// 	});
// });

// // Change background of nav bar on scroll
// $(window).scroll(function() {    
// var scroll = $(window).scrollTop();
// if (scroll > window.innerHeight - 55) {
//   $(".navbar").removeClass("transparent");
// } else {
//   $(".navbar").addClass("transparent");
// }
// });

// // Activate scrollspy to highlight nav item when scrolled over
// $("body").scrollspy({target: ".navbar"}) 

// // Bind events to open and close portfolio popups
// $(".thumbnail-overlay").on("click", openProject.bind( this ))
// $(".close-window").on("click", closeWindow.bind(this))

// function openProject( event ) {
// if ( $(event.target).next(".thumbnail-overlay") ) {
// var id =  "#" + $(event.target).parent().attr("page");
// $(id).fadeIn()
// } else {
// var id =  "#" + $(event.target).attr("page");
// $(id).fadeIn()
// }
// }

// function closeWindow( event ) {
// $(event.target).parents(".full-screen").fadeOut();
// }