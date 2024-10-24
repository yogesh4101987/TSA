
var winWidth = $(window).width();

$(document).ready(function () { 
    dealerSlider();  
});

$(window).resize(function () {
  if ($(window).width() < 769) {
    dealerSlider();
  }
});

function dealerSlider() {
  var swiper = new Swiper(".js-dealerSlider", {
    slidesPerView: "auto",
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
