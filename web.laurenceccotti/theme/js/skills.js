

(function ($) {
$(document).ready(function(){

//-----VARS


var windowH = $(window).height();
var windowW = $(window).width();

var skills = $('#skills');
var leftpage = $('.leftpage');
var rightpage = $('.rightpage');
var dotl = $('.dot.left');
var dotr = $('.dot.right');
var bubbles = $('#skills .skill');
var stars = $('.stars i');
var langues = $('#langues');
var frfill = $('.fr .mask.full, .fr .fill');
var enfill = $('.en .mask.full, .en .fill');
var itfill = $('.it .mask.full, .it .fill');
var spanh = $('.radial_progress span');

var colorskills = '#daef18';

var tl_progresscircles;
var tl_staggerSofts;
var tl_stagBubbles;

//-----FUNCTIONS


function staggerSofts() {

	tl_staggerSofts = new TimelineLite(),

	tl_staggerSofts.staggerTo('h3', 0.3, {opacity: 1}, 0.2) 
	.staggerTo('.ps i', 0.9, {opacity: 1, scale: 1, ease:Elastic.easeOut}, 0.2, 'first')
	.staggerTo('.il i', 0.9, {opacity: 1, scale: 1, ease:Elastic.easeOut}, 0.2, 'first')
	.staggerTo('.in i', 0.9, {opacity: 1, scale: 1, ease:Elastic.easeOut}, 0.2, 'first')
	.staggerTo('.fc i', 0.9, {opacity: 1, scale: 1, ease:Elastic.easeOut}, 0.2, 'first')
	.staggerTo('.gs i', 0.9, {opacity: 1, scale: 1, ease:Elastic.easeOut}, 0.2, 'first')

}


function progressCircles() {

	tl_progresscircles = new TimelineLite();

	tl_progresscircles.to(langues, 0.5, {opacity: 1})
	.to(frfill, 1.5, {rotation: 180}, '-=0.2')
	.to(enfill, 1.5, {rotation: 135}, '-=1.3')
	.to(itfill, 1.5, {rotation: 90}, '-=1.3')
	.staggerTo(spanh, 0.8, {opacity: 1}, 0.4, '-=1')
}

function stagBubbles() {

	tl_stagBubbles = new TimelineLite(),
	tl_stagBubbles.staggerTo(bubbles, 1, {opacity: 1, scale: 1, ease:Back.easeOut}, 0.2) 
}
stagBubbles();

stagBubbles();
tl_stagBubbles.duration(2.5);
tl_stagBubbles.eventCallback("onComplete", launchCircles);
	

function pageRightH() {

	var pageright = $('#page_skills .rightpage');
	var pagerighthe = pageright.innerHeight()+70;
	var windowH = $(window).height();
	
	if( pagerighthe < windowH){

		var adjust = (windowH-pagerighthe)/2;
		pageright.css({
			"margin-top": adjust
		});
	}else{
		pageright.css({
			"margin-top": 0
		});
	}
}
pageRightH();



function launchCircles() {

	if (rightpage.css('display')=='block') {
		staggerSofts();
		tl_staggerSofts.eventCallback("onComplete", progressCircles);
	};
}

function changePage(pageOn, arrOn, pageOff, arrOff) {

	pageOff.fadeOut();
	pageOn.fadeIn();
	arrOff.fadeOut();
	arrOn.fadeIn();

	launchCircles();
}


dotr.on('click', function () {	
	changePage(rightpage, dotl, leftpage, dotr);
});
dotl.on('click', function () {	
	changePage(leftpage, dotr, rightpage, dotl);
});


$("#page_skills div").swipe( {
	swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
	 changePage(rightpage, dotl, leftpage, dotr);
	},
	swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
	  changePage(leftpage, dotr, rightpage, dotl);
	}

});


function setBubblesH() {

	var windowH = $(window).height();
	var windowW = $(window).width();

	var ratio;
	var dd;
	var bubblesize;


	bubbles.each(function(){ 

		if($(this).hasClass('tera')){
			ratio = 5.6;
			dd = 0.20;
		}else if ($(this).hasClass('giga')){
			ratio = 5;
			dd = 0.30;
		}else if ($(this).hasClass('mega')){
			ratio = 4;
			dd = 0.40;
		}else if ($(this).hasClass('kilo')){
			ratio = 3.5;
			dd = 0.50;
		}else if ($(this).hasClass('hecto')){
			ratio = 3.2;
			dd = 0.60;
		}else if ($(this).hasClass('deca')){
			ratio = 2.5;
			dd = 0.70;
		};
		
		var bubblesize = (windowW/windowH *(ratio * 25));

		if((windowW/windowH)>=1){	//mode paysage, repartir sur H

			var bubblesize = (windowH/28) *ratio;
			console.log('paysage');

		}else if ((windowW/windowH)<1){	//mode portrait, repartir sur W

			var bubblesize = (windowH/22) *ratio;
			console.log('portrait');
		}


		$(this).attr('data-depth', dd);
		$(this).height(bubblesize).width(bubblesize);
		$(this).css({
			'line-height': bubblesize+'px'
		});
	});
}
setBubblesH();

function stagBubbles() {

	tl_stagBubbles = new TimelineLite(),
	tl_stagBubbles.staggerTo(bubbles, 1, {opacity: 1, scale: 1, ease:Back.easeOut}, 0.2) 
}
stagBubbles();



$(window).on('resize', function(){
	pageRightH();
	launchCircles();
	setBubblesH();

});


	
});	// doc ready
})(jQuery);
