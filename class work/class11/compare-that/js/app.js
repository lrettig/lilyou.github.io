'use strict';
$('#submit').click(function(){
    var a = $('#a').val();
    var b = $('#b').val();

    if (a == b) {
        $('#comparison').html('is equal to');
    } else if (a < b ){
        $('#comparison').html('is less than');
    }
    else if (a > b ){
        $('#comparison').html('is greater than');
    }
    
    
})