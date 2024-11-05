$(document).ready(function () {
  copyCoupon();
  if ($('.js-bg').length != 0) {
    bgImg();
  };
 
});

function copyCoupon() {
  $(".js-coupon .coupon").on("click", function () {
    const couponText = $(this).text();
    navigator.clipboard.writeText(couponText);
  });
}


// function bgImgFunction() {
//   $('.js-bg').each(function() {
//       var imgSrc = $(this).find('.bg-img').attr('src');    
//       $(this).css({
//           'background': '#F3F4F6 url(' + imgSrc + ')',
//           'background-position':' top right',
//           'background-repeat': 'no-repeat',  
//           'background-size': 'auto',
//           'background-size':'100% 100%'       
//       });
//   });   
// }

function bgImg() {
  $('.js-bg').each(function() {
      var imgSrc = $(this).find('.bg-img img').attr('src');
      $(this).css({
          'background-image': 'url(' + imgSrc + ')',
          'background-size': 'cover'
      });
  })
}
