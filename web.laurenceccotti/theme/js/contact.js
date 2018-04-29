(function ($) {
$(document).ready(function(){


//-----VARS

	var windowH = $(window).height();
	var windowW = $(window).width();

	var input = $('.balloon');

//-----FUNCTIONS



function floatLabel(inputType){

	$(inputType).each(function(){

		var $this = $(this);
		// on focus add cladd active to label
		$this.focus(function(){
			$this.addClass('active');
		});
		//on blur check field and remove class if needed
		$this.blur(function(){
			if($this.val() === '' || $this.val() === 'blank'){
				$this.removeClass('active');
			}
		});

	});
}
floatLabel(input);


var tl_whoami;

function whoami() {

	tl_whoami = new TimelineLite(),

	tl_whoami.to('#whoami p', 1.5, {opacity: 1})
	.staggerTo('#whoami h2', 1, {opacity: 1}, 0.4)
}
whoami();


function contactMe(){
	$('#whoami').css({
		'position': 'fixed'
	});
	$('#formulaire').slideDown('slow');
}

function closeContact(){
	console.log('heo');
	$('#whoami').css({
		'position': 'absolute'
	});
	$('#formulaire').slideUp('slow');

}

$('.contact_me a').on('click', contactMe);
$('#formulaire span').on('click', closeContact);


$(document).on('submit', '#contact_form', function(e) {

	var formurl = $(this).attr('action');
	var formtype = $(this).attr('method');
	var formdata = $(this).serialize();

     $.ajax({
        url: formurl,
        type: formtype,
        data: formdata,
        success: function(html) {
        	closeContact();
        	$('.message').show().html('Message sent !');
        	setTimeout(function() {
			    $('.message').fadeOut();
			}, 2500);
        }
    });
    e.preventDefault();
});


});	// doc ready





})(jQuery);
