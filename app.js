$(document).ready(function() {
    $('#myForm').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function() {
                $('#formResult').text('Thank you for your message!');
                $('#myForm').trigger("reset");
            },
            error: function(xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText
                $('#formResult').text('Error - ' + errorMessage);
            }
        });
    });
});