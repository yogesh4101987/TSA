var winWidth = $(window).width();

// $(document).ready(function () { 
//   bestSellingSlider();
// });

// $(window).resize(function () {  
//   bestSellingSlider();
// });

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
  $(".js-best-selling").slick({
    slidesToShow: 4,
    infinite:false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
}