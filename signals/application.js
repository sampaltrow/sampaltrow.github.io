<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

$(document).ready(function() {
	 $(".product-bc").on("mouseenter", function() {
	 $("#firstarrow").show();
	  $(".product-bc").on("mouseleave", function() {
	  $("#firstarrow").hide();	
	});
});



/*
$(this).animate("fast");
$(this).toggleClass(‘highlighted”);
*/