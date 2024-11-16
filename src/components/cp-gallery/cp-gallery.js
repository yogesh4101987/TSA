$(document).ready(function () { 
  gallerySlider();  
});


function gallerySlider() {
  var swiper = new Swiper(".js-gallery", {
    slidesPerView: "auto",
    loop: false,
    navigator: false
  });
}
