$(document).ready(function () {
  submitButton();
  reviewStarSubmit();
  selectStar();
});

function submitButton() {
    $("#askQuestion").on("input", function () {
    let title = $("#askQuestion").val().trim();
    if (title !== "") {
      $("#askQuestionbtn").attr("disabled", false).removeClass("disabled");
    } else {
      $("#askQuestionbtn").attr("disabled", true).addClass("disabled");
    }
  });   
}

function reviewStarSubmit() {
  // for title and review
  $("#feedbackQuestion, #form-review").on("input", function () {
    let title = $("#feedbackQuestion").val().trim();
    let review = $("#form-review").val().trim();
    if (title !== "" && review !== "") {
      $("#starReviewSumbit").attr("disabled", false).removeClass("disabled");
    } else {
      $("#starReviewSumbit").attr("disabled", true).addClass("disabled");
    }
  });
}

function selectStar() {
  $(".js-star-review").on("click", ".icon", function () {
      var starSelected = $(this).hasClass("star-selected");

      if (starSelected) {
        console.log("yes");
        $(".icon").removeClass("star-selected");
        $(this)
          .removeClass("star-selected")
          .prevAll()
          .removeClass("star-selected");
      } else {
        console.log("no");
        $(".icon").removeClass("star-selected");
        $(this).addClass("star-selected").prevAll().addClass("star-selected");
      }
    });
}
