var winWidth = $(window).width();
var swiper; // Declare swiper outside to reuse it

$(document).ready(function () { 
    realStoriesSlider();  
});

$(window).resize(function () {
  realStoriesSlider();
});

function realStoriesSlider() {
  if ($(window).width() < 769) {
    // Initialize Swiper only if it hasn't been initialized
    if (!swiper) {
      swiper = new Swiper(".js-real-stories", {
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
