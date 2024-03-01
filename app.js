$(document).ready(function() {
    $('.myForm').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function() {
                $('#formResult').text('Thank you for your message!');
                $('.myForm').trigger("reset");
            },
            error: function(message, status, error) {
                var errorMessage = message.status + ': ' + message.statusText
                $('.formResult').text('Error - ' + errorMessage);
            }
        });
    });

    $('.myFormTwo').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function() {
                $('#formResultTwo').text('Thank you for your message!');
                $('.myForm').trigger("reset");
            },
            error: function(message, status, error) {
                var errorMessage = message.status + ': ' + message.statusText
                $('.formResultTwo').text('Error - ' + errorMessage);
            }
        });
    });

    // MailChimp Script

    function($) {window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0]='EMAIL';
        ftypes[0]='email';
        fnames[1]='FNAME';
        ftypes[1]='text';
        fnames[2]='LNAME';
        ftypes[2]='text';
        fnames[3]='ADDRESS';
        ftypes[3]='address';
        fnames[4]='PHONE';
        ftypes[4]='phone';
        fnames[5]='BIRTHDAY';
        ftypes[5]='birthday';
    }
    (jQuery));var $mcj = jQuery.noConflict(true);


