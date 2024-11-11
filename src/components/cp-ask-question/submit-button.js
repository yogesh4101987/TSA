$(document).ready(function () {
  sumitButton();
  reviewStarSubmit();
  selectStar();
});

function sumitButton() {
  $(".js-question-form").each(function () {
    $(".question").on("input", function () {
      if ($(".question").val().trim() !== "") {
        $(this)
          .next(".btn-submit")
          .attr("disabled", false)
          .removeClass("disabled");
        console.log("enterd");
      } else {
        console.log("no value");
        $(this).next(".btn-submit").attr("disabled", true).addClass("disabled");
      }
    });
  });
}

function reviewStarSubmit() {
  // $(".js-star-review").each(function () {
    // for title and review
    $("#title, #review").on("input", function () {
      let title = $("#title").val().trim();
      let review = $("#review").val().trim();

      if (title !== "" && review !== "") {
        $("#starSubmit").attr("disabled", false).removeClass("disabled");
      } else {
        $("#starSubmit").attr("disabled", true).addClass("disabled");
      }
    });
  // });
}

function selectStar() {
  $(".js-star-review").each(function () {
    $(".icon").on("click", function () {
      $(".icon").removeClass("star-selected");
      $(this).addClass("star-selected").prevAll().addClass("star-selected");
    });
  });
}
