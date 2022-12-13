$(function () {
	/* Load Include Html */
	$('head').load('/include/head.html')
	$('.gnb-area').load('/include/gnb.html')
	$('.main-header-area').load('/include/main-header.html')

	/* Search Recent View Product Slider */
	$('.recent-view-items').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		infinite : false
	})

	/* Product Like 좋아요 버튼 toggle */
	$('.product-like').click(function () {
		$(this).toggleClass('active')
	})
})