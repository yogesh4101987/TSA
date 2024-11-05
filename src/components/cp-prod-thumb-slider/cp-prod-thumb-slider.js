
  $(document).ready(function() {
    // Initialize the main slider with Swiper
    var swiper = new Swiper(".js-thumb-slider", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".js-pro-slider", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });
  });

