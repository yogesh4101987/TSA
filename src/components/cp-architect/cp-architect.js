var winWidth = $(window).width();

$(document).ready(function () {
 
    homeTestimonialSlider();
  
});

$(window).resize(function () {
  if ($(window).width() < 769) {
    homeTestimonialSlider();
  }
});

function homeTestimonialSlider() {
  var swiper = new Swiper(".jsArchitect", {
    slidesPerView: "auto",
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
