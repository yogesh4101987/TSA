
var winWidth = $(window).width();

$(document).ready(function () { 
    tradeHandSlider();  
});

$(window).resize(function () {
  if ($(window).width() < 769) {
    tradeHandSlider();
  }
});

function tradeHandSlider() {
  var swiper = new Swiper(".js-tradeHandSlider", {
    slidesPerView: "auto",
    loop: true,
   
  });
}
