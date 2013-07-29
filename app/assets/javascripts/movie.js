	$(document).ready(function() {
		var url;
		$('#summary a').click(function(ev){
			url = $(this).attr('href');
			$("#explanation").attr("src", url)

			ev.preventDefault();
});

});