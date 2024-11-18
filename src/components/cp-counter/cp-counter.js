var winWidth = $(window).width();

$(document).ready(function () {
  productCount();
});

$(window).resize(function() {
  productCount()
});

function productCount(){
  $(document).on('click', '.btn-plus', function(e) {
    let count = parseInt($('.number-product').val());
    if (count < 10) {
      $('.number-product').val(count + 1);
    }
    if (count >= 0) {
      $('.btn-minus').prop('disabled', false);
    }
    if (count === 9) {
      $(this).prop('disabled', true);
    }
  });

  $(document).on('click', '.btn-minus', function(e) {
    let count = parseInt($('.number-product').val());
    if (count > 1) {
      $('.number-product').val(count - 1);
      $('.btn-plus').prop('disabled', false);
    }
    if (count - 1 === 1) {
      $(this).prop('disabled', true);
    }
  });
}
