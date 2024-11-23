var winWidth = $(window).width();

$(document).ready(function () {
  productCount();
});

$(window).resize(function() {
  productCount()
});

function productCount() {
  $(document).on('click', '.btn-plus', function () {
    alert("hi")
    // Find the counter container specific to this button
    const $counter = $(this).siblings('.number-product'); 
    let count = parseInt($counter.val());

    // Increment logic
    if (count < 10) {
      $counter.val(count + 1); // Update the value
      $(this).prop('disabled', count + 1 === 10); // Disable this button if max reached
      $(this).siblings('.btn-minus').prop('disabled', false); // Enable minus button
    }
  });

  $(document).on('click', '.btn-minus', function () {
    // Find the counter container specific to this button
    const $counter = $(this).siblings('.number-product'); 
    let count = parseInt($counter.val());

    // Decrement logic
    if (count > 1) {
      $counter.val(count - 1); // Update the value
      $(this).prop('disabled', count - 1 === 1); // Disable this button if min reached
      $(this).siblings('.btn-plus').prop('disabled', false); // Enable plus button
    }
  });
}
