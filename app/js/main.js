$(function () {



	$('.featured__slider-inner').slick({
		dots: false,
		arrows: true,
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/featured/chevron-left.png" alt=""></button>',
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/featured/chevron-right.png" alt=""></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
	})

	$(".rate-star").rateYo({
		rating: 5,
		starWidth: "12px",
		readOnly: true
	});



});