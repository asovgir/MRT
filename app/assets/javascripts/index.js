

// Dropdown menu when selecting Login or Register
$(document).ready(function(){
  $('#navigation #register').hide();
  $('#navigation #cork').hide();

var callRegistration = function(){  
  $('#navigation li:first-child a').click(function() {
		if ($('#navigation #register').is(':visible')) {
			$('#navigation #register').hide()
			} else { ($('#navigation #register').show() && $('#navigation #cork').hide())}
  });
  }

var callLogin = function(){  
  $('#navigation li:last-child a').click(function() {
		if ($('#navigation #cork').is(':visible')) {
			$('#navigation #cork').hide()
			} else { ($('#navigation #cork').show() && $('#navigation #register').hide())}
  });
  }
  
callRegistration();
callLogin();

// Hide when click elsewhere
 $('html').click(function() {
   $('#navigation #register').hide();
  $('#navigation #cork').hide();
 });
 $('#navigation').click(function(event){
     event.stopPropagation();
 });
});

//carousel
$(document).ready(function() {
    $('#my-carousel-2').carousel();
});

/* $(document).ready(function() {
	var myWidth = {};
	var countLI = {};
	myWidth.maxh = $("#my-carousel-2 .mask").width();
	countLI.count = $("#my-carousel-2 ul li").filter(function () {
			return $(this).position().left + $(this).width() < myWidth.maxh;
		}).length
	
	console.log(countLI.count);
}); */

/* Lightbox for add moive */
$(document).ready(function() {
	$('#addMovie').click(function() {
			alert("hi");
		
                //Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$(".login-popup").fadeIn(300);
		
		//Set the center alignment padding + border see css style
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);
		
		return false;
	});
	
	// When clicking on the button close or the mask layer the popup closed
	$('a.close, #mask').click(function() { 
	  $('#mask , .login-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
});