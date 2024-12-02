var winWidth = $(window).width();

$(document).ready(function() {
    addedFavorite();
    blogSlider();
});

$(window).resize(function() {
    blogSlider();
});

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

// function blogSlider() {
//     var swiper = new Swiper(".js-blog", {
//         slidesPerView: 'auto',
//         loop: false,
//         navigation: false
//     });
// }

function blogSlider(){

    if (winWidth < 767) {
        $(".js-blog-slick-slider").slick({
            slidesToShow: 1.2   ,
            infinite:false,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
              // dots: false, Boolean
             arrows: false, Boolean
           });

        }
        else{
            if ($('.js-blog-slick-slider').hasClass('slick-initialized')) {
                $('.js-blog-slick-slider').slick('unslick');
            }
				
        }

  
}