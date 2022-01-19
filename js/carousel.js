$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 2,
		// margin: 5,
		loop: true,
		dots: true,
		nav: true,
		navText: false, 
		autoHeight: true,
		responsive:{
			0:{items:1},
			0:{items:1},
			0:{items:1}
		}
	})
});
