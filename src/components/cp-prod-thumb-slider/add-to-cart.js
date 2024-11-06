$(document).ready(function () {
    // Adjust the scroll position where you want to remove the class
    const scrollPosition = 150;
  
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > scrollPosition) {
        alert("300")
        // Remove the class when scrolled beyond the specified position
        $(".btn.typ-add-cart").removeClass("fixedBtn");
      } else {
        // Add the class back if you want it to reappear when scrolling up
        $(".btn.typ-add-cart").addClass("fixedBtn");
      }
    });
  });
  
  