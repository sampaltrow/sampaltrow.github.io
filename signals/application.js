<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

$(document).ready(function() {
	 $(".product-bc").on("mouseenter", function() {
	 $(this).after("<img src=​"/​images/​arrow-left.png" width=​"69" height=​"69" class=​"arrow">​");
	  $(".product-bc").on("mouseleave", function() {
	 $(this).remove("<img src=​"/​images/​arrow-left.png" width=​"69" height=​"69" class=​"arrow">​");	
	});
});



/*
$(this).animate("fast");
$(this).toggleClass(‘highlighted”);
*/