$(document).ready(function () { 
  productTypeSlider();  
});


function productTypeSlider() {
    var swiper = new Swiper(".js-prod-types", {
        slidesPerView: "auto",
        loop: false,
        navigator: false
    });
}
