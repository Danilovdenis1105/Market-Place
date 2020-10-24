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
	})

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 320,
		from: 30,
		to: 300,
		prefix: "$"
	})

	$(".icon-th-list").on('click', function () {
		// $('.category-product__items').addClass('list');
		$('.product__item.grid').addClass('disable');
		$('.product__item.list').removeClass('disable');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$(".icon-th-large").on('click', function () {
		// $('.category-product__items').removeClass('list');
		$('.product__item.grid').removeClass('disable');
		$('.product__item.list').addClass('disable');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active');
	});

	$('.single-product__tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.single-product__tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});



	var mixer = mixitup('.products__inner-box');




});