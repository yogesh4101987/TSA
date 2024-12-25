

$(document).ready(function() {    
    patchVegiBannerSlider() 
});

function patchVegiBannerSlider() {
    var swiper = new Swiper(".js-patch-banner", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}