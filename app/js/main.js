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
		$('.grid').addClass('disable');
		$('.list').removeClass('disable');
		$('.icon-th-list').addClass('active');
		$('.icon-th-large').removeClass('active');
	});
	$(".icon-th-large").on('click', function () {
		$('.grid').removeClass('disable');
		$('.list').addClass('disable');
		$('.icon-th-large').addClass('active');
		$('.icon-th-list').removeClass('active');
	});

	$(".aside__item-title.category-title").on('click', function () {
		$('.aside__item-dropdown.category-dropdown').toggleClass('dropdown-visible');
		$('.aside__item-title.category-title').toggleClass('open');
	});

	$(".aside__item-title.filter-products-title").on('click', function () {
		$('.aside__item-dropdown.filter-products-dropdown').toggleClass('dropdown-visible');
		$('.aside__item-title.filter-products-title').toggleClass('open');
	});
	$(".aside__item-title.prise-title").on('click', function () {
		$('.aside__item-dropdown.prise-dropdown').toggleClass('dropdown-visible');
		$('.aside__item-title.prise-title').toggleClass('open');
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