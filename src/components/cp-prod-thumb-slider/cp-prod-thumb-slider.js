
  $(document).ready(function() {
    proThumbSlider()
  });


  $(window).resize(function () {  
    proThumbSlider()
  });

  function proThumbSlider(){
     // Initialize the main slider with Swiper
     var thumbSlider = new Swiper(".js-thumb-slider", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var mainSlider = new Swiper(".js-pro-slider", {
      spaceBetween: 10,
      thumbs: {
        swiper: thumbSlider,
      },
    });

    $('.plus-two-slide').on('click', function() {
      // Array of new images to be added
      const newMainImages = [
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-7.jpg'
      ];
  
      const newThumbImages = [
        '/components/cp-prod-thumb-slider/images/thumbnail_6.png',
        '/components/cp-prod-thumb-slider/images/thumbnail_7.png'
      ];
  
      // Add new slides to the main slider
      newMainImages.forEach((src) => {
        const newSlide = `<div class="swiper-slide"><img src="${src}" /></div>`;
        mainSlider.appendSlide(newSlide);
      });
  
      // Add new slides to the thumbnail slider
      newThumbImages.forEach((src) => {
        const newThumbSlide = `<div class="swiper-slide"><img src="${src}" /></div>`;
        thumbSlider.appendSlide(newThumbSlide);
      });
  
      // Update both sliders to ensure they reflect the new slides
      mainSlider.update();
      thumbSlider.update();
    });
  }



  
  

  