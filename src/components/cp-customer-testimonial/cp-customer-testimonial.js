var winWidth = $(window).width();

$(document).ready(function() {    
    if ($(window).width() < 769) {
        homeTestimonialSlider();
    }
});

$(window).resize(function() {
    if ($(window).width() < 769) {
        homeTestimonialSlider();
    }
});

function homeTestimonialSlider() {
    var swiper = new Swiper(".js-home-testimonial", {
        slidesPerView: 'auto',
        loop: false,
        navigation: false
    });
}