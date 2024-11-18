var winWidth = $(window).width();

$(document).ready(function() {
    homeStyleSlider();
});

$(window).on('resize', function() {
    homeStyleSlider();
});

function homeStyleSlider() {
    var swiper = new Swiper(".js-home-style", {
        slidesPerView: 'auto',
        loop: false,
        navigation: false
    });
}