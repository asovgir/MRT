$(document).ready(function() {
	
    // highlight clicked link
    $('section#summary a').click(function(){
        $('section#summary a').css("color", "#0088cc");
        $(this).css("color", "red");
    })

    var url;
	// show explanation iframe
	$('#summary a').click(function(ev){
		url = $(this).attr('href');
		$("#explanation").attr("src", url)

		ev.preventDefault();
	});


    var editor = CKEDITOR.replace('movieTextarea'); // convert textarea into CKEditor
    var explanation = CKEDITOR.replace('explanation_explanation'); // convert textarea into CKEditor






$('#submitDescription').click(function(){
    var explanation = CKEDITOR.instances['explanation_explanation'].getData();
    alert(explanation);
    $.ajax({
      type: "POST",
      url: "/explanations",
      data: { 
        explanation: {'explanation': explanation}
      }
    }).done(function() {
      $('#lastExplanation').attr("src", "/lasturl");
    }); 
    return false;
});




}); // close doc ready

