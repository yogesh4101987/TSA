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
        const $icon = $(this).find('.favorite-icon');
        const isFavorite = $icon.attr('src').includes('filled');

        $icon.attr('src', isFavorite ? '../components/cp-blog/images/icon-favorite-empty.svg' : '../components/cp-blog/images/icon-favorite-filled.svg');
        
        if (!isFavorite) {
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