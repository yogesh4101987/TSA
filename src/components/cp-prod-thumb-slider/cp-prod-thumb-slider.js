
  $(document).ready(function() {
    proThumbSlider()
  });


  $(window).resize(function () {  
    proThumbSlider()
  });

  function proThumbSlider(){
     // Initialize the main slider with Swiper
     var thumbSlider = new Swiper(".js-thumb-slider", {
      slidesPerView: 4,
    });
    var mainSlider = new Swiper(".js-pro-slider", {
      thumbs: {
        swiper: thumbSlider,
      },
    });

    
  }



  
  

  