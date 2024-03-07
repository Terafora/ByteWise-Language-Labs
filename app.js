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
});

// animate on scroll

$(document).ready(function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('show');
            } else {
                $(entry.target).removeClass('show');
            }
        });
    });

    const hiddenElements = $('.hidden');
    hiddenElements.each(function() {
        observer.observe(this);
    });
});

