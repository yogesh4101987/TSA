var winWidth = $(window).width();

$(document).ready(function () {
    brandLogo();
  });

  $(window).resize(function () {
    brandLogo();
  })

function brandLogo() {
    var swiper = new Swiper(".js-brandSlider", {
      slidesPerView:"auto",
      //slidesPerGroup:6,
      loop: false,
         autoplay: {
           delay: 3000,
         },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      
    });
  }