$(document).ready(function(){
    copyCoupon();
});


function copyCoupon(){
 $('.js-coupon .coupon').on('click',function(){
    const couponText = $(this).text();
    navigator.clipboard.writeText(couponText);
    
 }) 
}