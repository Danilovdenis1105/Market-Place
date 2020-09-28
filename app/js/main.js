$(function () {



	$('.featured__slider-inner').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/featured/chevron-left.png" alt=""></button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/featured/chevron-right.png" alt=""></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
	})

	$('.followers-feed__slider-inner').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/featured/chevron-left.png" alt=""></button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/featured/chevron-right.png" alt=""></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
	})

	$(".featured__rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});
	$(".followers-feed__item__rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});
	$(".product__rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});
	var mixer = mixitup('.products__inner-box');




});