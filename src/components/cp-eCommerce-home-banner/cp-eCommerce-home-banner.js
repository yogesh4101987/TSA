var winWidth = $(window).width();
var swiper;

$(document).ready(function() {    
    if (winWidth <= 991) {
        bannerFeatureMobile();
    } 
    else{
        destroyIsotope();
    }
});

$(window).resize(function() {
    if (winWidth <= 991) {
        bannerFeatureMobile();
    } else{
        destroyIsotope();
    }
});

function bannerFeatureMobile() {
    var $grid = $('.feature').isotope({
        itemSelector: '.feature-item',
        masonry: {
            columnWidth: '.grid-sizer',  
            gutter: 12
        }
    });
}

function destroyIsotope() {
    var $grid = $('.feature').data('isotope'); 
    if ($grid) {
        $grid.destroy(); // Destroy Isotope instance if present
    }
}