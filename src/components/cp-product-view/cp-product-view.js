var winWidth = $(window).width();

$(document).ready(function () { 
  topDealSlider();  
  bestSellingProdSlider();
});

$(window).resize(function () {  
  topDealSlider();
  bestSellingProdSlider();
});

function topDealSlider() {
  var swiper = new Swiper(".js-top-deals", {
    slidesPerView: "auto",
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next.button-next",
      prevEl: ".swiper-button-prev.button-prev",
    },
  });
}

function bestSellingProdSlider() {
  var swiper = new Swiper(".js-best-selling", {
    slidesPerView: "auto",
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next.best-selling-next",
      prevEl: ".swiper-button-prev.best-selling-prev",
    },
  });
}