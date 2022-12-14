$(function () {
	/* Load Include Html */
	$('.gnb-area').load('/include/gnb.html')
	$('.main-header-area').load('/include/main-header.html')

	/* Home Main Banner Slider */
	$('.home-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true
	})

	/* Home Best Product Slider */
	$('.front-best-new-product .product-items').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			infinite : false
	})
	
	/* Search Recent View Product Slider */
	$('.recent-view .recent-view-items').slick({
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

	/* Cart delete 버튼 */
	$('.add-cart .cart-delete-all').click(function () {
		$('.cart-items').hide()
	})

	$('.cart-items .item .btn-close').click(function () {
		$(this).parent().parent().hide()
	})
})