<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

$(document).ready(function() {
	 $("#first").on("mouseenter", function() {
	 	$(this).animate("fast");
	 	$(this).toggleClass(‘highlighted”);