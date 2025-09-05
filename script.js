
$(document).ready(function(){
	$(".question").click(function() {
		$(this).next().toggleClass("answer");
		$(this).next().slideToggle("Slow");
		$(".answer").next().toggleClass("styling");
	})
})
