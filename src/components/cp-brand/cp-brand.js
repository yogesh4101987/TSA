var winWidth = $(window).width();

$(document).ready(function () {
    brandLogo();
  });

  $(window).resize(function () {
    brandLogo();
  })

// function brandLogo() {
//     var swiper = new Swiper(".js-brandSlider", {
//       slidesPerView:"auto",
//       //slidesPerGroup:6,
//       loop: true,
//       autoplay: {
//         delay: 3000,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
      
//     });
//   }

function brandLogo() {

  $('.js-brand-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  });
  
}
