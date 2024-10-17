var winWidth = $(window).width();

$(document).ready(function() {
    homeTestimonialSlider();
});

$(window).resize(function() {
    homeTestimonialSlider();
});

function homeTestimonialSlider() {
    var swiper = new Swiper(".js-home-testimonial", {
        slidesPerView: 'auto',
        loop: false,
        navigation: false
    });
}