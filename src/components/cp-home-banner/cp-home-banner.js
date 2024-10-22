var winWidth = $(window).width();

$(document).ready(function() {    
    if ($(window).width() < 768) {
        homeBannerFeatureMobile();
    } 
    else{
        destroyIsotope();
    }
});

$(window).resize(function() {
    if ($(window).width() < 768) {
        homeBannerFeatureMobile();
    } else{
        destroyIsotope();
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

function destroyIsotope() {
    var $grid = $('.feature').data('isotope'); 
    if ($grid) {
        $grid.destroy(); // Destroy Isotope instance if present
    }
}