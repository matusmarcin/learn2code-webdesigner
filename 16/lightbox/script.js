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
    	// AHA, dorobil som aj posuvanie sipkami <- -> :)
    	} else if(event.which === 39 || event.which === 37) {
	    	var img = overlay.find('img');
	    	if(img.length && overlay.is(':visible')) {
	    		console.log(event.which);
	    		var src = img.attr('src');
	    		var $current = $('.gallery a[href="'+src+'"]');
	    		if(event.which === 37) {
	    			var $next = $current.prev();
	    		} else {
	    			var $next = $current.next();
	    		}
	    		if($next.length) {
	    			var href = $next.attr('href'),
						image = $('<img>', {src: href});

					overlay.html(image).show();
	    		} 
	    	}
	    }
    });

	$('.gallery').on('click', 'a', function(event) {

		var href = $(this).attr('href'),
			image = $('<img>', {src: href});

		overlay.html(image).show();

		event.preventDefault();
	});

	// 2. event listener na klik na #slideshow
	$('#slideshow').on('click', function(event) {
		console.log('funguje');
		// 3. vyberiem prvy obrazok a zobrazim ho
		// zmenil som $(this) na $(obrazok) kde obrazok je cez CSS selektor vytiahnuty prvy 'a' pod .gallery
		var obrazok = $('.gallery a:first-child');
		var href = obrazok.attr('href'), // tu sa to zmenilo z $(this)
		image = $('<img>', {src: href});

		overlay.html(image).show();
		// 4. setInterval (ulozte si ho do premennej)
		// 5. vo vnutri ziskajte dalsi obrazok a zobrazte ho
		// hint: obrazok.next()
		// 6. pridat if, ak next uz nie je, zrusit interval a zavriet overlay
		// hint: obrazok.length

		event.preventDefault();
	});

	/* **** TOTO JE KOMPLET SLIDESHOW **** */

	// $('#slideshow').on('click', function(event) {
	// 	var obrazok = $('.gallery a:first-child');
	// 	var href = $(obrazok).attr('href'), 
	// 	image = $('<img>', {src: href});

	// 	overlay.html(image).show();

	// 	obrazok = obrazok.next();
	// 	slideshow = setInterval(function () {
	// 		if(obrazok.length == 0) {
	// 			window.clearInterval(slideshow);
	// 			overlay.fadeOut('fast');				
	// 		}

	// 		var href = $(obrazok).attr('href'), 
	// 			image = $('<img>', {src: href});

	// 		overlay.html(image).show();

	// 		obrazok = obrazok.next();
	// 	}, 2000);

	// 	event.preventDefault();
	// });

	/* *** KONIEC SLIDESHOW *** */


	/* **** SLIDESHOW v2 - showImage ako funkcia **** */
	/*
	Aby sme sa neopakovali tolko krat s takmer rovnakym alebo velmi podobnym kodom, oddelime cast kodu, ktora zobrazuje obrazok do samostatnej funkcie s jednym parametrom.
	*/

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
	
	/* **** KONIEC SLIDESHOW v2 **** */

})(jQuery);
