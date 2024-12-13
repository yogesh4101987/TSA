var winWidth = $(window).width();
var winHeight = $(window).height();

$(document).ready(function() {
    tabFunction();
    commonPopup();
    if ($('.js-bg').length != 0) {
        bgImg();
    };
});


$(window).resize(function(e) {
    winWidth = $(window).width();
    winHeight = $(window).height();
});

$(window).on('load', function(event) {
    // $('#loaderWrapper').hide();
});

$(window).on('scroll', function(event) {
});

function tabFunction() {
    // Hide all tab contents except the active one
    $('.tab-content').hide();
    $('.tab-content.active').show();

    // Tab click handler
    $('.tab-item').click(function() {
        // Remove 'active' class from all tab items and contents
        $('.tab-item').removeClass('active');
        $('.tab-content').removeClass('active').fadeOut(200);

        // Add 'active' class to clicked tab and show corresponding content
        const target = $(this).data('target');
        $(this).addClass('active');
        $(target).addClass('active').fadeIn(200);
    });    
}

function bgImg() {
    $('.js-bg').each(function() {
        var imgSrc = $(this).find('.bg-img img').attr('src');
        $(this).css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        });
    })
}



// modalPopup js start

function commonPopup() {
    // Handle modal open event
    $(document).on('click', '.model-open[data-toggle="modal"]', function () {
        const modalId = $(this).attr('data-modal-id'); // Get the modal ID
        const videoId = $(this).attr('data-video-id'); // Get the video ID
        
        if (modalId) {
            const modalSelector = `.bs-modal#${modalId.replace("#", "")}`;
            
            // Show the modal and overlay
            $(modalSelector).addClass('modal-show show');
            $('.cm-overlay').addClass('active');
            $('body').css('overflow', 'hidden');

            // Dynamically set YouTube video URL with autoplay
            if (videoId) {
                $('#youtube-iframe').attr('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            }
        }
    });

    // Handle modal close event
    $(document).on('click', '.js-close, .cm-overlay', function () {
        // Hide the modal and overlay
        $('.bs-modal').removeClass('modal-show show');
        $('.cm-overlay').removeClass('active');
        $('body').css('overflow', 'auto');

        // Clear the YouTube iframe src to stop the video
        $('#youtube-iframe').attr('src', '');
    });
}

// modalPopup js end

