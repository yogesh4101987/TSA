var winWidth = $(window).width();

$(document).ready(function() {
    homeBannerFeature();
});

function homeBannerFeature() {
    $('.grid').masonry({
        itemSelector: '.feature-item',
        columnWidth: '.grid-sizer',
        percentPosition: true, 
        horizontalOrder: true          // Maintain horizontal order
    });
}