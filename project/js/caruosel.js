$(document).ready(function(){
	$(".slide-one").owlCarousel({
		loop: true,
		items: true,
		lazyLoad: false,
		autoHeight: true,
		dots: true,
	})
	$(".slide-two").owlCarousel({
		loop: true,
		items: 4,
		lazyLoad: false,
		dots: true,
		autoHeight: true,
		autoWidth: false,
		margin: 95,
		responsive:{
			0:{
				items: 3
			},
			320:{
				items: 2,
				margin: 30,
				dots: false
			},
			500:{
				items:4,
				margin: 30
			},
			768:{
				items:4,
				margin: 70
			},
			1000:{
				items:4,
			}
		}
	})
	$(".slide-three").owlCarousel({
		loop: false,
		items: false,
		lazyLoad: false,
		autoHeight: false,
		dots: false,
		autoWidth: false,
		responsive:{
			0:{
				loop: true,
				items: 2,
				dots: true,
				autoWidth: false,
			},
			500:{
			}
		}
	})
});
