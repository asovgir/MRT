

// load Answers when click questions via Ajax
// load Answer when clicking question
	$(document).ready(function() {
		var url;
		var answerHeight = $(window).height();
		$('.question a').click(function(ev) {
			url = $(this).attr('href');
			$('.answers').load(url, function() {
				 tinyMCE.init({ 
					theme : "advanced", 
					mode : "textareas", 
					plugins : "fullpage", 
					theme_advanced_buttons3_add : "fullpage" 
				  });	
				  
			$('#submitAnswer').on('click', function(e){
				e.preventDefault();
				var dataString = tinyMCE.get('addAnswer').getContent();
						
			
			// Next 3 functions are all for the csrf token
				function getCookie(name) {
					var cookieValue = null;
					if (document.cookie && document.cookie != '') {
						var cookies = document.cookie.split(';');
						for (var i = 0; i < cookies.length; i++) {
							var cookie = jQuery.trim(cookies[i]);
							// Does this cookie string begin with the name we want?
							if (cookie.substring(0, name.length + 1) == (name + '=')) {
								cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
								break;
							}
						}
					}
					return cookieValue;
				}
				var csrftoken = getCookie('csrftoken');
				
				function csrfSafeMethod(method) {
					// these HTTP methods do not require CSRF protection
					return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
				}
				function sameOrigin(url) {
					// test that a given url is a same-origin URL
					// url could be relative or scheme relative or absolute
					var host = document.location.host; // host + port
					var protocol = document.location.protocol;
					var sr_origin = '//' + host;
					var origin = protocol + sr_origin;
					// Allow absolute or scheme relative URLs to same origin
					return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
						(url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
						// or any other URL that isn't scheme relative or absolute i.e relative.
						!(/^(\/\/|http:|https:).*/.test(url));
				}
				$.ajaxSetup({
					beforeSend: function(xhr, settings) {
						if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
							// Send the token to same-origin, relative URLs only.
							// Send the token only if the method warrants CSRF protection
							// Using the CSRFToken value acquired earlier
							xhr.setRequestHeader("X-CSRFToken", csrftoken);
						}
					}
				});
				
				// End of csrf token functions
				
				$.ajax({
					type: "POST",
					url: "/home/19/80/",
					data: $(dataString),
					success: function(data){
						alert(data);
						$('.answerandcomments').html(data);
					},
					error: function(){
						alert('damn');
					}
				});
			}); 
				  
				  
			}).hide().fadeIn("slow").css('height', answerHeight);    
		ev.preventDefault();
		});
});	

// Dropdown menu when selecting Login or Register
//


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

// add question
$(document).ready(function(){
  $('.addQuestionWindow').hide();
	var callQuestionWindow = function(){  
	  $('.questionbutton').click(function() {
			if ($('.addQuestionWindow').is(':visible')) {
				$('.addQuestionWindow').hide()
				} else { $('.addQuestionWindow').show()}
	  });	  
	}
  callQuestionWindow();
});
	
	
//loginLightbox TO ATTACH TO ASK QUESTION SUBMIT BUTTON
$(document).ready(function() {
	$('.login-window').click(function() {
		
                //Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$('.login-popup').fadeIn(300);
		
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
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .login-popup').fadeOut(300 , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
});

// load User Input questions
$(document).ready(function() {
	$('.questionbutton a').click(function(ev) {
		var pathname = window.location.pathname;
		$('#login-box').load(pathname+'add_question/');
	});
});

// Change question div color when hover
$(document).ready(function() {
	$('.question ul li, .answerandcomments').hover(function() {
		$(this).addClass('questionHover');
	}, function() {
		$(this).removeClass('questionHover');
	});
});


// Set question div to height
$(document).ready(function() {
	var questionHeight = $(window).height();
	console.log(questionHeight);
	$('.question').css('height', questionHeight * 0.878);
});
