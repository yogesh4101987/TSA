$(document).ready(function () {
  copyCoupon();
  if ($('.js-bg').length != 0) {
    bgImg();
  };
 
});

function copyCoupon() {
  $(".js-coupon").on("click", function () {
    const couponText = $(this).text();
    navigator.clipboard.writeText(couponText);
  });
}

function bgImg() {
  $('.js-bg').each(function() {
      var imgSrc = $(this).find('.bg-img img').attr('src');
      $(this).css({
          'background-image': 'url(' + imgSrc + ')',
          'background-size': 'cover'
      });
  })
}
