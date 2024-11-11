$(document).ready(function () {
  accordion();
  selectStar();
});

function accordion() {
  $(".question-wrap").off().on("click", function () {
      if ($(this).parent(".accord-wrap").hasClass("clicked")) {
        $(this).next(".answer-wrap").slideUp();
        $(this).parent(".accord-wrap").removeClass("clicked");
      } else {
        $(".answer-wrap").slideUp();
        $(".accord-wrap").removeClass("clicked");
        $(this).parent(".accord-wrap").addClass("clicked");
        $(this).next(".answer-wrap").slideDown();
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
