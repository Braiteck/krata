$(function(){
	inView.offset( $(window).innerHeight() * 0.2 )

	if( $('.main_slider').length ) {
	  	inView('.main_slider')
		    .on('enter', function(el){
		   		$(el).addClass('animate')

		   		setTimeout(function(){
		   			$('header').addClass('animate')
		   		}, 800)
		  	})
	}


	if( $('.stats').length ) {
	  	inView('.stats')
		    .on('enter', function(el){
		   		let delay = 250

		   		$('header').addClass('animate')

		    	$(el).find('.item').each(function(){
		    		var _self = $(this)

		    		setTimeout(function(){
			    		_self.addClass('animate')
			    	}, delay)

			    	delay = delay+250
		    	})
		  	})
	}


	if( $('.cats_wall').length ) {
	  	inView('.cats_wall')
		    .on('enter', function(el){
		   		$(el).addClass('animate')
		   		$('header').addClass('animate')

		   		let delay = 0

		    	$(el).find('.item').each(function(){
		    		var _self = $(this)

		    		setTimeout(function(){
			    		_self.addClass('animate')
			    	}, delay)

			    	delay = delay+200
		    	})
		  	})
	}


	if( $('.articles').length ) {
	  	inView('.articles')
		    .on('enter', function(el){
		   		let delay = 0

		   		$('header').addClass('animate')

		    	$(el).find('.article').each(function(){
		    		var _self = $(this)

		    		setTimeout(function(){
			    		_self.addClass('animate')
			    	}, delay)

			    	delay = delay+300
		    	})
		  	})
	}


	if( $('.about_head').length ) {
	  	inView('.about_head')
		    .on('enter', function(el){
		   		$(el).addClass('animate')

		   		setTimeout(function(){
		   			$('header').addClass('animate')
		   		}, 800)
		  	})
	}
})