
$(document).ready(function(){
	$(".question").click(function() {
		$(this).hide();
		$(this).next(".answer") .addClass("styling");
		$(this).next(".answer").show(); 
	});

	$(".answer").click(function() {
		$(this).hide();
		$(this).prev(".question").show();
	});
});
