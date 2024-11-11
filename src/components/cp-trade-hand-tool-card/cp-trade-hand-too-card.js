
var winWidth = $(window).width();
var swiper;


$(document).ready(function () { 
    tradeHandSlider();  
});

$(window).resize(function () {
  if ($(window).width() < 769) {

    tradeHandSlider();
  }
});

function tradeHandSlider() {

  if ($(window).width() < 769) {
    // Initialize Swiper only if it hasn't been initialized
    if (!swiper) {
      swiper = new Swiper(".js-tradeHandSlider", {
        slidesPerView: "auto",
        loop: true,
      });
    }
  } else {
    // Destroy Swiper if it exists and the window width is >= 769
    if (swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
    }
  }
}
