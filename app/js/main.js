$(function () {



	$('.featured__slider-inner').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev featured"><img src="images/featured/chevron-left.png" alt=""></button>',
		nextArrow: '<button class="slick-arrow slick-next featured"><img src="images/featured/chevron-right.png" alt=""></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
	})

	$('.followers-feed__slider-inner').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev followers-feed"><img src="images/featured/chevron-left.png" alt=""></button>',
		nextArrow: '<button class="slick-arrow slick-next followers-feed"><img src="images/featured/chevron-right.png" alt=""></button>',
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