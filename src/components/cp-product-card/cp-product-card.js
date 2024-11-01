var winWidth = $(window).width();

$(document).ready(function () { 
  bestSellingSlider();
  reviewProductSlider();
  addedFavorite();
});

$(window).resize(function () {  
  bestSellingSlider();
  reviewProductSlider();
});


function bestSellingSlider() {
  var swiper = new Swiper(".js-selling-product", {
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
function addedFavorite() {
  $('.cp-toast').hide();

  $(document).on('click', '.js-add-favorite', function() {
      const $icon = $(this);
      const isActive = $icon.toggleClass('active icon-heart-fill').hasClass('active');
      $icon.toggleClass('icon-unfill-like', !isActive);
      const toastMessage = isActive ? 'Added to Favorite' : 'Removed from Favorite';
      $('.cp-toast').toggleClass('typ-error', !isActive);
      $('.cp-toast').text(toastMessage).show().delay(3000).fadeOut();
  }); 
}

function reviewProductSlider() {
  var swiper = new Swiper(".js-review-product", {
    slidesPerView: "auto",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}