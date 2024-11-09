var winWidth = $(window).width();
var winHeight = $(window).height();

$(document).ready(function() {
    tabFunction();
    commonPopup();
    // if ($('.js-bg').length != 0) {
    //     bgImg();
    // };
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
            'background-size': 'cover'
        });
    })
}


// modalPopup js start

function commonPopup() {
    $(document).on('click', '.model-open[data-toggle="modal"]', function() {
        var abc = $(this).attr('data-modal-id');
        abc = abc.replace("#", "");
        // alert(abc);
        $('.bs-modal#' + abc).addClass('modal-show show');
        $('.cm-overlay').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    $(document).on('click', '.js-close, .cm-overlay', function() {
        $('.bs-modal').removeClass('modal-show show');
        $('body').css('overflow', 'auto');
        $('.cm-overlay').removeClass('active');
        $('#youtubevideo').attr('src', '');
    });
}
// modalPopup js end