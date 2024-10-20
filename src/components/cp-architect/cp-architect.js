var winWidth = $(window).width();

$(document).ready(function () {
 
  architectSlider();
  
});

$(window).resize(function () {
  if ($(window).width() < 769) {
    architectSlider();
  }
});

function architectSlider() {
  var swiper = new Swiper(".js-architect", {
    slidesPerView: "auto",
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
