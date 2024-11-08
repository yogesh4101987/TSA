var winWidth = $(window).width();

$(document).ready(function() {
    drawerFunc();
});

function drawerFunc() {
    var drawer = $('.cp-drawer');
    
    $(document).on('click', '.js-details', function(e) {
        e.preventDefault();
        $(drawer).toggleClass('active');
        $('body').toggleClass('cm-overflow-hidden');
        $('.cm-overlay').toggleClass('active');
    });

    $(document).on('click', '.cp-drawer .js-close-btn', function(e) {
        e.preventDefault();
        $(drawer).removeClass('active');
        $('body').removeClass('cm-overflow-hidden');
        $('.cm-overlay').removeClass('active');
    });
}