var winWidth = $(window).width();

$(document).ready(function() {
    drawerFunc();
});

function drawerFunc() {
    $(document).on('click', '.js-details[data-id]', function(e) {
        e.preventDefault();
        var detailId = $(this).data('id'); 
        var drawer = $('.cp-drawer[data-id="' + detailId + '"]'); 
        drawer.addClass('active'); 
        $('body').addClass('cm-overflow-hidden');
        $('.cm-overlay').addClass('active');
    });

    $(document).on('click', '.cp-drawer .js-close-btn', function(e) {
        e.preventDefault();
        var drawer = $(this).closest('.cp-drawer'); 
        drawer.removeClass('active'); 
        $('body').removeClass('cm-overflow-hidden');
        $('.cm-overlay').removeClass('active');
    });
}