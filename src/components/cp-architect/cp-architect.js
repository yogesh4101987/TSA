var winWidth = $(window).width();

$(document).ready(function () { 
  fabricatorsSlider();  
});

$(window).resize(function () {
  if ($(window).width() < 769) {
    fabricatorsSlider();
  }
});

function fabricatorsSlider() {
  var swiper = new Swiper(".js-fabricators", {
    slidesPerView: "auto",
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next.fabricators-next",
      prevEl: ".swiper-button-prev.fabricators-prev",
    },
  });
}

