

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


/* Search autocomplete */
$(document).ready(function(){

// instantiate the bloodhound suggestion engine
	var movies = new Bloodhound({
	  datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.title); },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  limit: 10,
	  prefetch: 'movielist.json'
	});
	 
	// initialize the bloodhound suggestion engine
	movies.initialize();
	 
	// instantiate the typeahead UI
	$('.block3 .typeahead').typeahead(null, {
	  name: 'title',
	  displayKey: 'title',
	  source: movies.ttAdapter()
	});

});


/* Lightbox for add moive */
$(document).ready(function() {
	$('#addMovie').click(function() {


		var editor = CKEDITOR.replace('MovieDescription');
                //Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$('#login-box').fadeIn(300);
		
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