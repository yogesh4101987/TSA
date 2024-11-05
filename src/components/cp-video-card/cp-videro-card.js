
var winWidth = $(window).width();

$(document).ready(function () { 
    realStoriesSlider();  
});

$(window).resize(function () {
  if ($(window).width() < 769) {
    realStoriesSlider();
  }
});

function realStoriesSlider() {
  var swiper = new Swiper(".js-real-stories", {
    slidesPerView: "auto",
    loop: true,
    
  });
}
