'use strict';
$(document).ready(function () {

	var lights = 'on';

	$('#lightswitch').click(function () {
		if (lights == 'on') {
			lights = 'off';

			$('#lightswitch')
				.toggleClass('switch-on')
				.html('OFF');
		} else {
			lights = 'on';

			$('#lightswitch')
				.toggleClass('switch-on')
				.html("ON");
		}

		$('body').remodeClass('light-off');

	})

})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;