$(document).ready(function() {
    accordion();
    if ($(window).width() < 769) {
        mobileaccordion();
    }
});

$(window).resize(function () {    
    if ($(window).width() < 769) {
        mobileaccordion();
    }
  });
function accordion() {
    $(document).on('click', '.acc-head', function() {
        var $this = $(this);
        var $parentElm = $this.closest(".acc-item");

        if ($parentElm.hasClass("active")) {
            $parentElm.removeClass("active").find(".acc-cont").slideUp();
        } else {
            $(".cp-accordion .acc-item").removeClass("active").find(".acc-cont").slideUp();
            $parentElm.addClass("active").find(".acc-cont").slideDown();
        }
    });
}

function mobileaccordion() {

    $(document).on('click', '.acc-head-card', function() {
        var $this1 = $(this);
        var $parentElm1 = $this1.closest(".acc-item-card");

        if ($parentElm1.hasClass("active")) {
            $parentElm1.removeClass("active").find(".acc-cont-card").slideUp();
        } else {
            $(".cp-accordion .acc-item-card").removeClass("active").find(".acc-cont-card").slideUp();
            $parentElm1.addClass("active").find(".acc-cont-card").slideDown();
        }
    });
}
