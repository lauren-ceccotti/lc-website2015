(function ($) {
$(document).ready(function(){


//-----VARS

	var windowH = $(window).height();
	var windowW = $(window).width();
		
	var modeactuel;

	var mainTitles = $('.title');
	var zoneMenu = $('#zone_menu');
	var zoneHome = $('.title');
	var logo = $('img.logosvg');
	var menu = $('#zone_menu nav');
	var menu_items = $('#zone_menu nav a');
	var menu_skills = $('#zone_menu nav li:nth-child(1) a');
	var menu_projects = $('#zone_menu nav li:nth-child(2) a');
	var menu_journey = $('#zone_menu nav li:nth-child(3) a');
	var menu_contact = $('#zone_menu nav li:nth-child(4) a');
	var content = $('#content');

	var displaystat;
	var tl_animMenu;

	var menubottom;
	var menu_y;
	var updateposy;
	var menuscale;
	var menubigW;


//-----FUNCTIONS

//-------- MODE HOME ----------------


	function welcome() {
		modeactuel = 'modeHome';
		TweenMax.to(logo, 2, {rotation: -360, scale: 1});
		TweenMax.staggerTo(mainTitles, 1.5, {opacity: 1, delay: 0.5}, 0.5);
	}

	welcome();


	function menuminiLook() {

		var windowW = $(window).width();
		var windowH = $(window).height();

		if(windowW <=519){
			menubottom = -80;
			menuscale = 0.15;
			menubigW = 200;
		}else if(windowW <=638){
			menubottom = -100;
			menuscale = 0.15;
			menubigW = 250;
		}else if(windowW <=767){
			menubottom = -125;
			menuscale = 0.13;
			menubigW = 300;
		}else if(windowW <=929){
			menubottom = -145;
			menuscale = 0.13;
			menubigW = 350;
		}else if(windowW >929){
			menubottom = -165;
			menuscale = 0.13;
			menubigW = 400;

		}

		if(modeactuel == 'modeMenuMini'){
			TweenMax.to(logo, 0.3, {bottom: menubottom});
			TweenMax.to(logo, 0.3, {scale: menuscale});

		}
	}
	menuminiLook();


	function updateY() {
		 windowH = $(window).height();
		 windowW = $(window).width();

		updateposy = (windowH/2)-(menubigW/2);
		menu_y = updateposy;

	}
	updateY();


	function centrXAbsolu(e) {

		var windowW = $(window).width();
		e.css({
		   	  'left': (windowW/2)-(e.width()/2)
	   	});
	}
	function centrageAbsolu(e) {
	
		var windowH = $(window).height();
		var windowW = $(window).width();

		e.css({
		   	  'bottom': (windowH/2)-(e.height()/2),
		   	  'left': (windowW/2)-(e.width()/2)
	   	});

	}

	//pour resize
	function centreLogo() {
 		if(modeactuel == 'modeMenuMini'){
    		centrXAbsolu(logo);
    		menu_y = updateposy;


 		}else{
 			centrageAbsolu(logo);
 			menu_y = menubottom;

 		}
    }
    centreLogo(logo);


	function byeHome() {

		if(modeactuel =='modeHome'){

			TweenMax.to('h2.title', 1, {y:-500});
			TweenMax.to('h1.title', 1, {y:500});
			TweenMax.to(mainTitles, 0, {display:'none', delay: 0.5});
			TweenMax.to(menu, 0.5, {opacity: 1});
			TweenMax.staggerTo(menu_items, 1.6, {opacity:1, delay: 0, zIndex: 4, delay: 0.5}, 0.4);

			modeactuel= 'modeMenu';
		}
	}

	zoneHome.on('click', function () {
		byeHome();
	});


//-------- MODE MENU ----------------


	function sizeMenuitems() {
		var windowH = $(window).height();
		var windowW = $(window).width();
		var nav = $('#zone_menu nav');
		var navW = nav.width();
		var menu_items = $('#zone_menu nav a');

		menu_items.height(windowH/2);
		menu_items.innerWidth(navW/2);

		var menu_itemsTop = $('#zone_menu nav li:nth-child(1) a, #zone_menu nav li:nth-child(2) a');
		var menu_itemsBot = $('#zone_menu nav li:nth-child(3) a, #zone_menu nav li:nth-child(4) a');

		menu_itemsTop.css({
			'line-height': Math.round(windowH/3) +'px'
		})
		menu_itemsBot.css({
			'line-height': Math.round(windowH/1.5) +'px'
		})
		//centre nav
		nav.css({
			'left': (windowW/2-navW/2)+'px'
		})

	}
	sizeMenuitems();


	//---- O P E N • C L O S E -----------------------

	function classMenu() {
		if(modeactuel == 'modeMenuMini'){
			logo.addClass('menumini');
		}else if(modeactuel == 'modeMenu'){
			logo.removeClass('menumini');
			//logo.addClass('menuopen');
		}
	}


	function animMenu() {

		tl_animMenu = new TimelineLite(),	//RangeMenu
		menuVertical = TweenMax.to(logo, 0.7, {bottom: menu_y});

		tl_animMenu.to(logo, 1.5, {rotation: 360, scale: menuscale}, 'menu_items')
		.to(menu_items, 1, {scale: 0.1, opacity: 0}, '-=1.2','menu_items')  //commence Xsec avant la fin du precedent
		.to(menu_skills, 1, {x: '50%', y: '50%'}, 'menu_items')
		.to(menu_projects, 1, {x: '-50%', y: '50%'}, 'menu_items')
		.to(menu_journey, 1, {x: '50%', y: '-50%'}, 'menu_items')
		.to(menu_contact, 1, {x: '-50%', y: '-50%'}, 'menu_items')
		.to(menu, 1, {opacity: 0}, 'menu_items')
		.to(menu, 0, {display: displaystat})
		.add(menuVertical)
		.to(logo, 0.4, {background: 'rgba(255, 255, 255, 0.7)'})
	}


	$('#zone_menu nav a').on('click', function(event) {
		event.preventDefault();
		modeactuel= 'modeMenuMini';
		menu_y = menubottom;

	    var link = $(this).attr('href');
	    var url = 'index.php?module='+link;
	   	//var url = 'index.php?request=ajax&module='+link;
	    var js = 'theme/js/'+link+'.js';

	    var addscript = '<script type="text/javascript" src="'+js+'"></script>';


	    function addJs(){
	    	$.ajax({
	            url : js, //on test si fichier existe bien
	            type: 'HEAD',
	            success : function(data){
	                jQuery.getScript(js);
	            }
        	});
	    }
	    		                
	    function gotoLink() {
			$.ajax({
	            url : url, // Le module correspondant au clic
	            type : 'GET',
	            success : function(content){
	                $('#content').html(content);
	                addJs();
	               // history.pushState({key: 'value'}, 'titre', url);
	            }
        	});
		}

		displaystat = 'none';
		classMenu();

		TweenMax.to(content, 1, {opacity: 1});
		animMenu();
		tl_animMenu.duration( 2 );
		tl_animMenu.eventCallback("onComplete", gotoLink);
		menu_y = updateposy;

	});

	
	logo.on('click', function () {		// OUVRE MENU
		if(modeactuel == 'modeMenuMini'){
			displaystat = 'block';
			menu_y = updateposy;

			TweenMax.set(logo, {bottom: menu_y});
  			menuVertical.invalidate();
			tl_animMenu.duration( 1 );
			tl_animMenu.reverse(0);
			TweenMax.to(menu_items, 1, {opacity: 1});
			TweenMax.to(content, 1, {opacity: 0.2});
			modeactuel = 'modeMenu';

		}else if(modeactuel == 'modeMenu'){		// FERME MENU
			displaystat = 'none';
			menu_y = menubottom;
	
			animMenu();
			tl_animMenu.duration( 2 );
			TweenMax.to(content, 1, {opacity: 1});
			TweenMax.to($('span.welcome'), 1, {opacity: 1});
			modeactuel = 'modeMenuMini';
		}
		classMenu();

	});



//-------  FUNCTIONS ALLANT DANS WINDOW.RESIZE -------

function resizeSuit() {
	modeactuel;
	sizeMenuitems();
	centreLogo(logo);
	menuminiLook();
	updateY();
}

//-------  WIDOW LOAD  -------

$(window).load(function(){

    centreLogo(logo); //aussi au doc ready

//-------  WIDOW RESIZE  -------

$(window).resize(resizeSuit);


});	// window loaded

	
});	// doc ready
})(jQuery);
