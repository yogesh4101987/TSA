$(document).ready(function () {
  accordion();
  selectStar();
});

function accordion() {
  $(".acc-head").off().on("click", function () {
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

function selectStar() {
  $(".icon").on("click", function () {
    $(".icon").removeClass("selected");

    $(this).addClass("selected").prevAll().addClass("selected");
  });
}

// function accordion() {
//   $(document).off().on("click", ".question-wrap", function (event) {
//     var $this = $(this);
//     var parentElm = $this.closest(".accord-wrap");
//     if ($this.hasClass("clicked")) {
//       parentElm.removeClass("clicked");
//       parentElm.find(".answer-wrap").slideUp();
//     } else {
//       $(".cp-accordion").find(".accord-wrap").removeClass("clicked");
//       $(".cp-accordion").find(".answer-wrap").slideUp();
//       parentElm.find(".answer-wrap, .question-wrap").addClass("clicked");
//       parentElm.addClass("clicked");
//       parentElm.find(".answer-wrap").slideDown();
//     }
//   });
// }
