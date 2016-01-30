$(window).scroll(function() {
	if ($(this).scrollTop() > window.innerHeight){
    	$('nav').addClass("sticky");
		$('#fakeNav').addClass("clearfix");
  	}
	else{
		$('nav').removeClass("sticky");
		$('#fakeNav').removeClass("clearfix");
	}
});


