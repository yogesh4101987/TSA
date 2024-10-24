var winWidth = $(window).width();

$(document).ready(function() {    
    if ($(window).width() < 768) {
        $('.grid-sizer').show();
        homeBannerFeatureMobile();
    } else{
        $('.grid-sizer').hide();
        destroyIsotope();
    }
});

$(window).resize(function() {
    if ($(window).width() < 768) {
        $('.grid-sizer').show();
        homeBannerFeatureMobile();
    } else{
        $('.grid-sizer').hide();
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