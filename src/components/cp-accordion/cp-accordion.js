$(document).ready(function () {
  accordion();
});

function accordion() {
  $(".acc-head").on("click", function (e) {
      if ($(this).parent(".acc-item").hasClass("active")) {
        $(this).next(".acc-cont").slideUp();
        $(this).parent(".acc-item").removeClass("active");
      } else {
        $(".acc-cont").slideUp();
        $(".acc-item").removeClass("active");
        $(this).parent(".acc-item").addClass("active");
        $(this).next(".acc-cont").slideDown();
      }
    });
}

