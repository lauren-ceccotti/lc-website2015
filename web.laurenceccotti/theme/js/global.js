

(function ($) {
$(document).ready(function(){

//------------ TACTEEL --------------------------------------------
	var ua = navigator.userAgent;
	var event = "click";
	var mobile = 0;
	var move  = "mousemove";

	if(ua.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)){
	    event = "touchstart";
	    mobile = 1;
	    move  = "touchstart";
	}

//-------------------------------------------------------------

//-----VARS
	var windowH = $(window).height();
	var windowW = $(window).width();
	var modeMobile;

function detectScreensize() {
	var windowH = $(window).height();
	var windowW = $(window).width();

	if(windowW >= 769){
		modeMobile = false;	
	}else if(windowW < 769){	
		modeMobile = true;
	}
}

//-------
$(window).load(function(){

	$('body').css({opacity:1});

});	// window ready

	
});	// doc ready
})(jQuery);
