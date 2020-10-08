$(function () {



	$('.featured__slider-inner').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev lnr-chevron-left"></button>',
		nextArrow: '<button class="slick-arrow slick-next lnr-chevron-right"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
	})

	$('.followers-feed__slider-inner').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev lnr-chevron-left"></button>',
		nextArrow: '<button class="slick-arrow slick-next lnr-chevron-right"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
	})

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true,
		spacing: "4px"
	});

	var mixer = mixitup('.products__inner-box');




});