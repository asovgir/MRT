$(document).ready(function() {
	var url;


	// show explanation iframe
	$('#summary a').click(function(ev){
		url = $(this).attr('href');
		$("#explanation").attr("src", url)

		ev.preventDefault();
	});



/* var e=$("#movieTextarea")[0]; 
function getInputSelection(el) {
    var start = 0, end = 0, normalizedValue, range,
        textInputRange, len, endRange;

    if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
        start = el.selectionStart;
        end = el.selectionEnd;
    } else {
        range = document.selection.createRange();

        if (range && range.parentElement() == el) {
            len = el.value.length;
            normalizedValue = el.value.replace(/\r\n/g, "\n");

            // Create a working TextRange that lives only in the input
            textInputRange = el.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());

            // Check if the start and end of the selection are at the very end
            // of the input, since moveStart/moveEnd doesn't return what we want
            // in those cases
            endRange = el.createTextRange();
            endRange.collapse(false);

            if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                start = end = len;
            } else {
                start = -textInputRange.moveStart("character", -len);
                start += normalizedValue.slice(0, start).split("\n").length - 1;

                if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
                    end = len;
                } else {
                    end = -textInputRange.moveEnd("character", -len);
                    end += normalizedValue.slice(0, end).split("\n").length - 1;
                }
            }
        }
    }

    return {
        start: start,
        end: end
    };
} 




function getselection()
{

var selectedText=getInputSelection(e);

var start=selectedText.start;
var end=selectedText.end;
var finalend = '<a href="http://localhost:3000/">' + start + " "+end + '</a>'
    alert(finalend);
$('#display123').show().append(finalend)



} */



// Convert Edit Movie description into CKEditor
// Get highlighted text

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




$("#new_explanation").on('submit', function(ev){
    $('#lastExplanation').attr("src", "/lasturl", function(){
        alert('sup');
    });
    return false;
    // newurl = $(this).attr('href');
    //  alert(newurl);
    // $("#newURL").attr("src", url);
    
    

    
}); // End Convert Edit Movie description into CKEditor 











}); // close doc ready

