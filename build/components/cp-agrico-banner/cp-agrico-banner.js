$(document).ready(function() {    
    agricoBannerSlider();
});

function agricoBannerSlider() {
var swiper = new Swiper(".js-agrico-banner", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}