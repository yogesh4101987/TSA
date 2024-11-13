var winWidth = $(window).width();

$(document).ready(function() {
    productCount()
});

$(window).resize(function() {
    productCount()
});

function productCount(){
    var num;

$(document).on("click",'.btn-minus', function(){
  num = parseInt($('.cp-counter input:text').val());
  if (num > 1) {
    $('.cp-counter input:text').val(num - 1);
  } 
  if (num == 2) {
    $('.btn-minus').prop('disabled', true);
  }
  if (num == 10) {
    $('.btn-plus').prop('disabled', false);
  }
});

$(document).on("click",'.btn-plus',function(){
  num = parseInt($('.cp-counter input:text').val());
  if (num < 10) { 
    $('.cp-counter input:text').val(num + 1);
  }
  if (num > 0) {
    $('.btn-minus').prop('disabled', false);
  }
  if (num == 9) {
    $('.btn-plus').prop('disabled', true);
  }
});
}
