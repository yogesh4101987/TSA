$(document).ready(function () {
  copyCoupon();
  backgroundImage();
});

function copyCoupon() {
  $(".js-coupon .coupon").on("click", function () {
    const couponText = $(this).text();
    navigator.clipboard.writeText(couponText);
  });
}

function backgroundImage() {
  $('.js-coupon').each(function () {
    const imgSrc = $(this).find(".bg-img").attr("src");
    
        $(this).css({
            'background': 'url(' + imgSrc + ')',
            'background-repeat': 'no-repeat',
            'background-cover':'auto',
            'background-size':'100% 100%'
        })
   
  });
}
