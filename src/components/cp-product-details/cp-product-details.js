var winWidth = $(window).width();

$(document).ready(function() {
    drawerInnerSliders();
});

function drawerInnerSliders() {
    const innerCardSlider = new Swiper('.js-drawer-card-slider', { 
        pagination: {
            el: ('.drawer-pagination'), 
            clickable: true,
        },
        slidesPerView: 1,
    });
}