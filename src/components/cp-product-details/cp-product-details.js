var winWidth = $(window).width();

$(document).ready(function() {
    drawerInnerSliders();
});

function drawerInnerSliders() {
    const drawerInnerSliders = new Swiper('.js-drawer-card-slider', { 
        pagination: {
            el: ('.drawer-pagination'), 
            clickable: true,
        },
        slidesPerView: 1,
    });
}