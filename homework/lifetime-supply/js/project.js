$('#click-me').click(function(){
// Store your current age into a variable
var age = $('#age').val();
// Store a maximum age into a variable
var maxAge = $('#max-age').val();

// Store a favorite drink (from a drop-down) into a variable
var favoriteDrink = $('#item').val();

// Store an amount per day into a variable

var amountPerDay = $('#num-per-day').val();

// Calculate how much you would drink for the rest of your life!
var solution = (parseInt(maxAge) - parseInt(age)) * amountPerDay * 365);
console.log(solution);

// Output your results to the user

// $('#output').html('You will drink ' + solution + ' more ' +  favoriteDrink + ' in your lifetime.');

$('output').html(total);
$('drink').html(favoriteDrink);

})