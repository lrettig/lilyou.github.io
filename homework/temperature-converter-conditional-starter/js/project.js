// $('#f-button').click(function() {
// 	var farInput = parseFloat($('#f-input').val());
// 	var celOutput = (farInput - 32) * 5 / 9;

// 	// Clear input elements
// 	$('#f-input').val('')
// 	$('#c-input').val('')

// 	if (farInput > 100)
// 		$('body').addClass('red-body');

// 	$('#answer').html(farInput + '&deg; fahrenheit is ' + celOutput + '&deg; celcius.');
// });

// $('#c-button').click(function() {
// 	var celInput = parseFloat($('#c-input').val());
// 	var farOutput = celInput * 9 / 5 +32;

// 	// Clear input elements
// 	$('#f-input').val('')
// 	$('#c-input').val('')
	
// 	$('#answer').html(celInput + '&deg; celcius is ' + farOutput + '&deg; fahrenheit.');
// });

$('#temp-button').click(function() {
	var inputVal = $('#temp-input').val();
	var unit = inputVal.substring(inputVal.length-1);
	var inputTemp = parseFloat(inputVal.substring(0, inputVal.length-1));

	var outputTemp, newUnit;
	if (unit === 'c') {
		outputTemp = inputTemp * 9 / 5 +32;
		newUnit = 'f';
	}
	else if (unit === 'f') {
		outputTemp = (inputTemp-32) * 5 / 9;
		newUnit = 'c';
	}
	else
		return alert('Input temperature must end with "c" or "f"!');

	if (outputTemp < 0) {
		$('body').removeClass();
		$('body').addClass('blue-body');
	}
	else if (outputTemp > 100) {
		$('body').removeClass();
		$('body').addClass('red-body');
	}
	else {
		$('body').removeClass();
		// $('body').addClass('green-body');
	}

	// Clear input elements
	$('#temp-input').val('');
	
	$('#answer').html(inputTemp + '&deg; ' + unit + ' is ' + outputTemp + '&deg; ' + newUnit);
});



/*

Please use your own starter code if you already have created a temperature coverter! Otherwise I've provided this folder as a starting point for the modifications.


Modifications to make:

1. Add a condition inside click functions so that some style(s) on the page change depending on the the outputted temperature (example: if the outputted temp is above 80f make background red).

2. (BONUS) Refactor temperature convertor so there is one convert button, and it automatically converts from F > C if user enters a fahrenheit tempurature, and from C > F. 

Hint: use something like !isNaN(farInput) as a condition to check that the inputed value is a number. "!" means "is not" so the condition here: 

	if (!isNaN(farInput) {
	
	}

is saying "do something if farInput isn't NaN (Not a Number)" ...or in other words "if it is a number"

3. (BONUS) use jQuery .show() and .hide() to have some elements appear on the page depending on the tempurature

*/ 



