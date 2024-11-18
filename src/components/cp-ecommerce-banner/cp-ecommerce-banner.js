var winWidth = $(window).width();

$(document).on('ready', function() { 
    
        ecomHomeBannerSlider();
    
});

$(window).on('resize', function() {
    if ($(window).width() < 769) {
        ecomHomeBannerSlider();
    }
});

function ecomHomeBannerSlider() {
    var swiper = new Swiper(".js-banner", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}