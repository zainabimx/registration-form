$(document).ready(function () {
    $('#registrationForm').submit(function (event) {
        event.preventDefault(); // Prevent default form submission
        
        // Simulate AJAX call with form data
        $.ajax({
            url: 'http:/localhost/registration-form/process.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function (response) {
                $('#response').html(response).css('color', '#4a90e2').fadeIn();
            },
            error: function () {
                $('#response').html('There was an error with the submission.').css('color', 'red').fadeIn();
            }
        });
    });
});              