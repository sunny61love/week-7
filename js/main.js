$(window).on('scroll',function(e){
	var px = $(window).scrollTop();
	

	$('.hero').css('transform','rotate('+px+'deg)');
	

});™