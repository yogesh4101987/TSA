$(document).ready(function () {
  sumitButton();
  reviewStarSubmit();
  selectStar();
});

function sumitButton() {
    $(".form-control").on("input", function () {
      if ($(".form-control").val().trim() !== "") {
        $(this)
          .next(".btn-submit")
          .attr("disabled", false)
          .removeClass("disabled");
      } else {
        
        $(this).next(".btn-submit").attr("disabled", true).addClass("disabled");
      }
    });
}

function reviewStarSubmit() {
 
    // for title and review
    $("#title, #review").on("input", function () {
      let title = $("#form-review").val().trim();
      let review = $("#form-review").val().trim();

      if (title !== "" && review !== "") {
        $("#starSubmit").attr("disabled", false).removeClass("disabled");
      } else {
        $("#starSubmit").attr("disabled", true).addClass("disabled");
      }
    });
}

// function selectStar() {
//     var starSelect = $(".js-star-review").find(".icon");
//     starSelect.off().on("click", function () {
//       if($(this).hasClass("star-selected")){
//         $(".icon").removeClass("star-selected");
//         $(this).removeClass("star-selected").prevAll().removeClass("star-selected");
//       }
//       else{
//         $(".icon").removeClass("star-selected");
//         $(this).addClass("star-selected").prevAll().addClass("star-selected");
//       }
//     });
 
// }

// function selectStar() {
//   var iconSelect = $(".js-star-review").find(".icon");
//   iconSelect.on("click", function () {
//    var starSelected = $(this).hasClass("star-selected");
//     if(starSelected == true){
//       console.log("yes")
//       $(".icon").removeClass("star-selected");
//       $(this).removeClass("star-selected").prevAll().removeClass("star-selected");
//     }
//     else{
//       console.log("no")
//       $(".icon").removeClass("star-selected");
//       $(this).addClass("star-selected").prevAll().addClass("star-selected");
//     }
//   });
// }


function selectStar() {
  $(".js-star-review").off().on("click", ".icon", function () {
    var starSelected = $(this).hasClass("star-selected");

    if (starSelected) {
      console.log("yes");
      $(".icon").removeClass("star-selected");
      $(this).removeClass("star-selected").prevAll().removeClass("star-selected");
    } 
    else {
      console.log("no");
      $(".icon").removeClass("star-selected");
      $(this).addClass("star-selected").prevAll().addClass("star-selected");
    }
  });
}



