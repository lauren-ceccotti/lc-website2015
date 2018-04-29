(function ($) {
$(document).ready(function(){

//-----VARS

	var windowH = $(window).height();
	var windowW = $(window).width();
	var modeMobile;

	var buttonList = $('i.fa-chevron-down');
	var navList = $('nav#projects_list');
	var listUl = $('#projects_list ul');
	var listitems = $('#projects_list li');
	var listitemsA = $('#projects_list a');	

	var content = $('#project_content');
	var currproj = $('#project_side');

	var tag = $('.tags');
	var prevnext = $('.prevnext a');

	var link;
    var project;

	var tl_helloList;
	var tl_byeList;


//-----FUNCTIONS

function detectScreensize() {
	var windowH = $(window).height();
	var windowW = $(window).width();

	if(windowW >= 769){
		modeMobile = false;	
	}else if(windowW < 769){	
		modeMobile = true;
	}
}

detectScreensize();


function scrollbar() {
	navList.mCustomScrollbar({
		advanced: {
            updateOnContentResize: true
        },
	    theme:"dark-thin",
	    autoHideScrollbar: true,
	    scrollInertia: 100
	});
}
scrollbar();


function myProjectScroll() {
	content.mCustomScrollbar({
		advanced: {
            updateOnContentResize: true
        },
	    theme:"dark-thin",
	    autoHideScrollbar: true,
	    scrollInertia: 100
	});
}
myProjectScroll();



////////  TIMELINES  /////////////


function helloList() {
	tl_helloList = new TimelineLite();

	tl_helloList.to(buttonList, 0.5, {opacity: 0})
	.to(navList, 2, {height: '100%'}, '-=0.3')
	.staggerTo(listitems, 1, {opacity: 1}, 0.3, '-=1.7')

}
helloList();


function byeList() {
	tl_byeList = new TimelineLite();
	
	tl_byeList.staggerTo(listitems, 1, {opacity: 0}, 0.2, 'bye')
	.to(navList, 2, {height: 0}, 'bye')
	.to(buttonList, 0.2, {opacity: 1}, '-=2.8')
}

/////////////

// quand on est sur projet detail mode mobile >> passage mode tablette
// quand on est en mode mobile avec menu ouvert

function keepProjectList() {
 	var vlist = navList.height();

 	if(modeMobile == false && vlist == 0){
 		helloList();
 		tl_helloList.duration( 1 );
 	}else if(modeMobile == true && vlist > 0){
		buttonList.css({'opacity': 0});
 	}
}


buttonList.on('click', function () {
	helloList();
});



////////  AJAX  /////////////


	//lors de l'ajax, change bg-image
	function bgProject() {	
		$('.projet_top').css({
			'background-image': 'url(theme/images/proj_background/'+project+'.jpg)'
		});
	}

    function loadproject() {
		$.ajax({
            url : link, 
            type : 'GET',
            success : function(data){
                $('#project_side').html(data);
               	bgProject();
               	content.mCustomScrollbar("update");
               	content.mCustomScrollbar("scrollTo","top",{scrollInertia:200});
               	navProjects(); //relaunch
            }
    	});
	}

	// MANIERE DE CHARGER PROJET SI MODE MOBILE OU NON
	function mobileMode() {	

		if(modeMobile == true){
			loadproject();
			byeList();
			tl_byeList.duration( 1.5 );	

		}else if(modeMobile == false){
			loadproject();
		}
	}

listitemsA.on('click', function(event) {
	event.preventDefault();
  
    link = $(this).attr('href');
    project = $(this).parent().attr('class');

	listitemsA.removeClass('active');
	$(this).addClass('active');

	//si mode mobile, puis relancer apres deroulage //navList.mCustomScrollbar("disable",true);
	mobileMode();


});

function navProjects() {
	$('.prevnext a').on('click', function(event) {

		event.preventDefault();

		link = $(this).attr('href');
	    project = $(this).attr('title');

	    listitemsA.removeClass('active');

	    var newitemlist = $( '#projects_list a[href="'+link+'"]' );
		newitemlist.addClass('active');
		mobileMode();

	});
}



// MARCHE PAS CAUSE CUSTOM SCROLLABRRE ? FIND DEBUG

// $('body').swipe( {
// 	//Generic swipe handler for all directions
// 	swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
// 	 alert('right');
// 	},
// 	swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
// 	 alert('left');
// 	}
// 	//Default is 75px, set to 0 for demo so any distance triggers swipe
// 	 //threshold:0
// });






//-------  WIDOW RESIZE  -------
$(window).resize(function () {
	detectScreensize();
	keepProjectList();

});
	
});	// doc ready





})(jQuery);
