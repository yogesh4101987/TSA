var winWidth = $(window).width();

$(document).ready(function() {
    addedFavorite();
    blogSlider();
});

$(window).resize(function() {
    blogSlider();
});

function addedFavorite() {
    $('.cp-toast').hide();

    $(document).on('click', '.js-add-favorite', function() {
        const $icon = $(this);

        // Add active and icon-heart-fill classes, remove icon-unfill-like
        $icon.addClass('active icon-heart-fill').removeClass('icon-unfill-like');

        // Show toast notification if icon-heart-fill is added
        if ($icon.hasClass('active')) {
            $('.cp-toast').show().delay(5000).fadeOut();
        }
    }); 
}


function blogSlider() {
    var swiper = new Swiper(".js-blog", {
        slidesPerView: 'auto',
        loop: false,
        navigation: false
    });
}