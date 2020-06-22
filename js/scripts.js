$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: true,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000
	})


	// Пигменты
	$('.pigments .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: true,
		loop: true,
		smartSpeed: 500,
		autoplay: true,
		autoplayTimeout: 3000
	})


	// Боковая колонка
	$('aside .cats a.sub_link').click(function(e) {
		e.preventDefault()

		let cats = $(this).parent('div').parent('div')

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			cats.find('.sub_link').removeClass('active')
			cats.find('.sub_cats').slideUp(300)

			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Логотип
	if($(window).width() > 1279){
		$logo_imgs = $('header .logo img')
	} else{
		$logo_imgs = $('.mob_header .logo img')
	}

	$logo_imgs_current = 0
	$logo_imgs_total = $logo_imgs.size()

	showLogo()


	// Боковая колонка
	$('aside .mob_cats_link').click(function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active').next().slideUp(300)
		} else {
			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Товар
	$('.product_info .images .slider').owlCarousel({
		items       : 1,
		margin      : 20,
		loop        : false,
		smartSpeed  : 500,
		dots        : false,
		nav         : false,
		onTranslate : (event) => {
			const parent = $(event.target).closest('.images')

			parent.find('.thumbs button').removeClass('active')
			parent.find('.thumbs button:eq(' + event.item.index + ')').addClass('active')
		}
	})

	$('.product_info .images .thumbs button').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.images')

		parent.find('.thumbs button').removeClass('active')
		parent.find('.slider').trigger('to.owl', $(this).data('slide-index'))

		$(this).addClass('active')
	})


	// Представительства
	let addWidth = ($(window).width() - $('.representations .cont').width()) / 2

	$('.representations #map').css({
		'width': $('.content_flex .content').width() + addWidth,
		'margin-left': -addWidth
	})


	// Фото галерея
	$('.photo_gallery_item .slider').owlCarousel({
		items       : 1,
		margin      : 20,
		loop        : false,
		smartSpeed  : 500,
		dots        : false,
		nav         : true,
		onTranslate : (event) => {
			const parent = $(event.target).closest('.photo_gallery_item')

			parent.find('.thumbs button').removeClass('active')
			parent.find('.thumbs button:eq(' + event.item.index + ')').addClass('active')
		}
	})

	$('.photo_gallery_item .thumbs button').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.photo_gallery_item')

		parent.find('.thumbs button').removeClass('active')
		parent.find('.slider').trigger('to.owl', $(this).data('slide-index'))

		$(this).addClass('active')
	})
})


$(window).load(function(){
	// Шапка
	headerHeight = $('header.inner').innerHeight()

	$('header.inner').wrap('<div class="header_wrap" style="height: ' + headerHeight + 'px"></div>')
})


$(window).resize(function(){
	// Шапка
	setTimeout(function(){
		headerHeight = $('header.inner').innerHeight()

		$('.header_wrap').height('auto')

		$('header.inner').wrap('<div class="header_wrap" style="height: ' + headerHeight + 'px"></div>')
	}, 100)

	if( $(window).scrollTop() > 0 ) {
		$('header').addClass('fixed')
	} else {
		$('header').removeClass('fixed')
	}


	// Представительства
	let addWidth = ($(window).width() - $('.representations .cont').width()) / 2

	$('.representations #map').css({
		'width': $('.representations .content').width() + addWidth,
		'margin-left': -addWidth
	})
})


$(window).scroll(function(){
	// Шапка
	if( $(window).scrollTop() > 0 ) {
		$('header').addClass('fixed')
	}else{
		$('header').removeClass('fixed')
	}
})



function showLogo(){
	$logo_imgs.eq($logo_imgs_current).fadeIn(500)

	setTimeout(function(){
		$logo_imgs.hide()

		if( $logo_imgs_current == ($logo_imgs_total-1) ) {
			$logo_imgs_current = 0
		} else {
			$logo_imgs_current++
		}

		showLogo()
	}, 3500)
}