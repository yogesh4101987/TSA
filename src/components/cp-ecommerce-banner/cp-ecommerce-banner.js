var winWidth = $(window).width();

$(document).ready(function() {    
    
        ecomHomeBannerSlider();
    
});

$(window).resize(function() {
    if ($(window).width() < 769) {
        ecomHomeBannerSlider();
    }
});

function ecomHomeBannerSlider() {
    var swiper = new Swiper(".js-banner", {
        pagination: {
          el: ".swiper-pagination",
        },
      });
}