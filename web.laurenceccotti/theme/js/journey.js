(function ($) {
$(document).ready(function(){

//-----VARS

	var windowH = $(window).height();
	var windowW = $(window).width();

	var halfW;
	var mousePosY;
	var zoneMouse;

	var stage = $('.stage');
	var roue = $('img.rouesvg');

//-----FUNCTIONS

function setHalfW() {
	windowH = $(window).height();
	windowW = $(window).width();

	halfW = (windowH/2);
}
setHalfW();


function introJourney(){
	tl_introJourney = new TimelineLite(),

	tl_introJourney.to('.roue', 0.5, {opacity: 1}) 
	.to('.forward', 1, {opacity: 1})
	.to('.forward', 0.3, {color: 'rgb(255, 67, 92)'})
	.to(roue, 0.5, {rotation: '-=30'})
	.to('.forward', 0.3, {color: 'black'})
	.to('.forward', 0.5, {opacity: 0})


	.to('.backward', 1, {opacity: 1})
	.to('.backward', 0.3, {color: 'rgb(255, 67, 92)'})
	.to(roue, 0.5, {rotation: '+=30'})
	.to('.backward', 0.3, {color: 'black'})
	.to('.backward', 1, {opacity: 0})

	.to(roue, 0.5, {rotation: '-=150'})
	.to('.backward, .forward', 0, {display: 'none'})
	.to('.prev, .next', 0, {display: 'block'})
}


introJourney();
tl_introJourney.eventCallback("onComplete", firstStage);


// en callback de l'intro
function firstStage() {
	stage.first().fadeIn(500).addClass('active');
}

function nextStage() {
	var active = $('.active');
	active.fadeOut();
	newactive = active.next('.stage');
	active.removeClass('active');

	if(newactive.html() === undefined){
		newactive =	stage.first();
		newactive.fadeIn().addClass('active');
		TweenMax.to(roue, 0.5, {rotation: '+=150'});
	}else{
		newactive.fadeIn().addClass('active');
		TweenMax.to(roue, 0.5, {rotation: '-=30'});
	}
}

function prevStage() {
	var active = $('.active');
	active.fadeOut();
	newactive = active.prev('.stage');
	active.removeClass('active');

	if(newactive.html() === undefined){
		newactive =	stage.last();
		newactive.fadeIn().addClass('active');
		TweenMax.to(roue, 0.5, {rotation: '-=150'});
	}else{
		newactive.fadeIn().addClass('active');
		TweenMax.to(roue, 0.5, {rotation: '+=30'});
	}
}

$('.next').on('click', function () {
	nextStage();
});
$('.prev').on('click', function () {
	prevStage();
});

$("#page_journey").swipe( {
	swipeDown:function(event, direction, distance, duration, fingerCount, fingerData) {
	 nextStage();
	},
	swipeUp:function(event, direction, distance, duration, fingerCount, fingerData) {
	  prevStage();
	},

});

//-------  WIDOW RESIZE  -------
$(window).resize(function () {
	setHalfW();
});
	
});	// doc ready





})(jQuery);
