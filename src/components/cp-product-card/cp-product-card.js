var winWidth = $(window).width();

$(document).ready(function () { 
  topDealSlider();  
  bestSellingSlider();
});

$(window).resize(function () {  
  topDealSlider();
  bestSellingSlider();
});

function topDealSlider() {
  var swiper = new Swiper(".js-top-deals", {
    slidesPerView: "auto",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.button-next",
      prevEl: ".swiper-button-prev.button-prev",
    },
  });
}

function bestSellingSlider() {
  var swiper = new Swiper(".js-best-selling", {
    slidesPerView: "auto",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.best-selling-next",
      prevEl: ".swiper-button-prev.best-selling-prev",
    },
  });
}