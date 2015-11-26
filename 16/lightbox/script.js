(function($) {
	var overlay = $('<div>', {id: 'overlay'});
	overlay.appendTo('body').hide();

	var slideshow;

	overlay.on('click', function() {
		$(this).fadeOut('fast');
		window.clearInterval(slideshow);
	});

	$(document).on('keyup', function(event) { 
    	if(event.which === 27) {
    		overlay.fadeOut('fast'); 
    		window.clearInterval(slideshow);
    	}
    });

	$('.gallery').on('click', 'a', function(event) {
		$('.gallery a.open').removeClass('open');
		var href = $(this).attr('href').addClass('open'), 
			image = $('<img>', {src: href});

		overlay.html(image).show();

		event.preventDefault();
	});

	$('#slideshow').on('click', function(event) {
		var obrazok = $('.gallery a:first-child');
		var href = $(obrazok).attr('href'), 
		image = $('<img>', {src: href});

		overlay.html(image).show();

		obrazok = obrazok.next();
		slideshow = setInterval(function () {
			if(obrazok.length == 0) {
				window.clearInterval(slideshow);
				overlay.fadeOut('fast');				
			}

			var href = $(obrazok).attr('href'), 
				image = $('<img>', {src: href});

			overlay.html(image).show();

			obrazok = obrazok.next();
		}, 2000);

		event.preventDefault();
	});

	// window.clearInterval(slideshow);



	// $('#slideshow').on('click', function(event) {
	// 	var $a = $('.gallery a:first-child');
	// 	showImage($a);
	// 	var slideshow = setInterval(function () { 
	// 		$a = $a.next();
	// 		if($a.length) {
	// 			showImage($a);
	// 		} else {
	// 			clearInterval(slideshow);
	// 			overlay.fadeOut('fast');
	// 		}
	// 	}, 2000);

	// 	event.preventDefault();
	// });

	// function showImage($element) {
	// 	var href = $element.attr('href');
	// 	var image = $('<img>', {src: href});

	// 	overlay.html(image).show();
	// }

})(jQuery);