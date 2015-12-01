(function($) {

	$(window).scroll( function() {
		// console.log($(this).scrollTop());
		$('.pozadie .obrazok').css('transform', 'translateY(-' + $(this).scrollTop()/3 + 'px)');
	});

})(jQuery);
