var winWidth = $(window).width();

$(document).ready(function () { 
  topDealSlider();  
});

$(window).resize(function () {
  if ($(window).width() < 769) {
    topDealSlider();
  }
});

function topDealSlider() {
  var swiper = new Swiper(".js-top-deals", {
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next.button-next",
      prevEl: ".swiper-button-prev.button-prev",
    },
  });
}
