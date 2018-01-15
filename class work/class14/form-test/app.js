$(document).ready(function () {

    $('#myForm').submit(function(e){
        e.preventDefault();

        console.log('hello', $('#name-input').val());        
    });
})
