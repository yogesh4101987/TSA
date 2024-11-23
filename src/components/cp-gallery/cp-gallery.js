$(document).ready(function () { 
  gallerySlider();  
  drawerGallerySlider();
  if ($('.cp-product-type.typ-category').length != 0) {
    findCategory();
  };
});


function gallerySlider() {
  var swiper = new Swiper(".js-gallery", {
    slidesPerView: "auto",
    loop: false,
    navigator: false
  });
}

function findCategory() {
  $('.bs-sec.typ-wiron-banner').hide();
  $('.bs-sec.typ-wiron-gallery').hide();
  $(document).on('click', '.js-find-category', function(e) {
    e.preventDefault();
    var category = $(this).data('category');
    console.log('category: ', category)
    if (category !== 'all'){
      $('.bs-sec.typ-wiron-banner').hide();
      $('.bs-sec.typ-wiron-gallery').show();
    } else{
      $('.bs-sec.typ-wiron-banner').show();
      $('.bs-sec.typ-wiron-gallery').hide();
    }
  });
}

function drawerGallerySlider() {
  var swiper = new Swiper(".js-drawer-gallery", {
    slidesPerView: 1,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

