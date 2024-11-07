var winWidth = $(window).width();
var winHeight = $(window).height();

$(document).ready(function() {
    tabFunction();
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