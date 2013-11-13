$(document).ready(function() {
	var url;


	// show explanation iframe
	$('#summary a').click(function(ev){
		url = $(this).attr('href');
		$("#explanation").attr("src", url)

		ev.preventDefault();
	});


var editor = CKEDITOR.replace('movieTextarea');

function getSelectionHtml(editor) {
    var sel = editor.getSelection();
    var ranges = sel.getRanges();
    var el = new CKEDITOR.dom.element("div");
    for (var i = 0, len = ranges.length; i < len; ++i) {
        el.append(ranges[i].cloneContents());
    }
    return el.getHtml();

}

$("#getSelection").click(function(){
    var value = getSelectionHtml(editor)
    alert(value)
    var input = $('#explanation_synopsis');
        input.val(value);
}); // End Convert Edit Movie description into CKEditor



$('#submitDescription').click(function(){
    var synopsis = $('input#explanation_synopsis').val();
    var explanation = $('input#explanation_explanation').val();
    if (synopsis === ""){
        alert(dataString);
    }


    $.ajax({
      type: "POST",
      url: "/explanations",
      data: { 
        explanation: {'synopsis': synopsis}
      }
    }).done(function() {
      alert('successflly submited');
      $('#lastExplanation').attr("src", "/lasturl");
    }); 
    return false;
});













}); // close doc ready

