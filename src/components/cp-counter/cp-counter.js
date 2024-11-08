var winWidth = $(window).width();

$(document).ready(function() {
    productCount()
});

$(window).resize(function() {
    productCount()
});

function productCount(){
    var num;

$('.btn-minus').click(function(){
  num = parseInt($('input:text').val());
  if (num > 1) {
    $('input:text').val(num - 1);
  }
  if (num == 2) {
    $('.btn-minus').prop('disabled', true);
  }
  if (num == 10) {
    $('.btn-plus').prop('disabled', false);
  }
});

$('.btn-plus').click(function(){
  num = parseInt($('input:text').val());
  if (num < 10) {
    $('input:text').val(num + 1);
  }
  if (num > 0) {
    $('.btn-minus').prop('disabled', false);
  }
  if (num == 9) {
    $('.btn-plus').prop('disabled', true);
  }
});
}
