

var SCREEN_BREAK_WIDTH = 560;

$(document).ready( function() {

	var screenWidth = $(window).width();

	if (screenWidth < SCREEN_BREAK_WIDTH) {
		$("#menu-btn").removeClass("colapsed");
		$("#drop-down").addClass("colapsed"); // Adding a class to show our toggle
	}


	$("#menu-btn").click( function() { 
		// The .slideToggle method slides the 'nav' open/closed over 500ms
		$("#drop-down").slideToggle(500);
	})
});