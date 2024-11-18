$(document).on('ready', function() {
    accordion();
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
