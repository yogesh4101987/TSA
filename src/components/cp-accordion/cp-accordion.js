$(document).ready(function () {
   accordion();
   selectStar();
});

function accordion() {
  $(".question-wrap").on("click", function () {
    if ($(this).next(".answer-wrap").hasClass("active")) {
      $(this).next(".answer-wrap").removeClass("active").slideUp();
      $(this).children(".icon").removeClass("icon-minus").addClass("icon-plus");
      $(this).parent(".cp-accordion").removeClass("clicked");
    } else {
      $(".answer-wrap").removeClass("active").slideUp();
      $(".question-wrap").children(".icon").removeClass("icon-minus").addClass("icon-plus");
      $(".question-wrap").parent(".cp-accordion").removeClass("clicked");
      $(this).next(".answer-wrap").addClass("active").slideDown();
      $(this).children(".icon").addClass("icon-minus").removeClass("icon-plus");
      $(this).parent(".cp-accordion").toggleClass("clicked");
    }
  });
}

function selectStar(){
  $('.icon').on('click',function(){
    $('.icon').removeClass('selected');

    $(this).addClass("selected").prevAll().addClass("selected");
   console.log($(this),"clicked element")
  })
}
