var winWidth = $(window).width();

$(document).ready(function() {    
    if ($(window).width() < 768) {
        homeBannerFeatureMobile();
    } 
});

$(window).resize(function() {
    if ($(window).width() < 768) {
        homeBannerFeatureMobile();
    } 
});

function homeBannerFeatureMobile() {
    var $grid = $('.feature').isotope({
        itemSelector: '.feature-item',
        // layoutMode: 'masonry',
        masonry: {
            columnWidth: '.grid-sizer',  
            gutter: 6 
        }
    });
}