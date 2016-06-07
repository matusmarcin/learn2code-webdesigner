(function($) {

	$(window).scroll( function() {
		// console.log($(this).scrollTop());

		// ak zoskrolujem o 200px dole:
		// .pozadie .obrazok { transform: translate3d(0, -100px, 0); }
		$('.pozadie .obrazok').css('transform', 'translate3d(0, -' + $(this).scrollTop()/2 + 'px, 0)');

		/** nejake napady, ako vyriesit velku bielu medzeru */

		// 1. priblizovat obsah pod .pozadie zapornym margin-bottom
		// $('.pozadie').css('margin-bottom', '-' + $(this).scrollTop()/3 + 'px');
		
		// 2. zmensovat .pozadie
		// v kombinacii s overflow: hidden na .pozadie
		$('.pozadie').css('height', 500-$(this).scrollTop()/2+'px');
	});

})(jQuery);
