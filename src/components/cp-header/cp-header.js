$(document).ready(function() {
    // stickyHeader();
    hamburgerMenu();
});

function stickyHeader(){
  var header = $('.cp-header');
  var offset = header.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > offset) {
      header.addClass('js-fixed-header');
    } else {
      header.removeClass('js-fixed-header');
    }
  });
}

function hamburgerMenu(){
  $(".open-menu").click(function () {
    //$(this).toggleClass("active");
    $(".nav-list").addClass("active")
    $(".bottom-sec").addClass("active")

    //$(".cm-overlay").toggleClass("active")
    $("body").addClass("cm-overflow-hidden")

  });
  $(".close").click(function () {
    $(".nav-list").removeClass("active")
    $(".bottom-sec").removeClass("active")
    $("body").removeClass("cm-overflow-hidden")

  })
}