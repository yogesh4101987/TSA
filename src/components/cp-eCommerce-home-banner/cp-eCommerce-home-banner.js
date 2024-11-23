let featureSwiper;

$(document).ready(function () {
    handleResponsiveFeatures();
});

$(window).resize(function () {
    handleResponsiveFeatures();
});

function handleResponsiveFeatures() {
    const currentWidth = $(window).width();

    if (currentWidth < 768) {
        destroySwiper();
        if (!$('.grid-sizer').length) {
            $('<div class="grid-sizer"></div>').appendTo('.feature');
        }
        bannerFeatureMobile();
    } else {
        $('.grid-sizer').remove();
        destroyIsotope();
        bannerFeatureDesktop();
    }
}

function bannerFeatureMobile() {
    const grid = document.querySelector('.feature');
    const iso = new Isotope(grid, {
        itemSelector: '.feature-item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: 12,
        },
    });
}

function destroyIsotope() {
    const $grid = $('.feature').data('isotope');
    if ($grid) {
        $grid.destroy();
    }
}

function bannerFeatureDesktop() {
    if (!featureSwiper) {
        featureSwiper = new Swiper(".js-feature-banner", {
            slidesPerView: 6,
            loop: false,
            navigation: {
                nextEl: ".swiper-button-next.feature-next",
                prevEl: ".swiper-button-prev.feature-prev",
            },
        });
        console.log(featureSwiper)
    }
}

function destroySwiper() {
    if (featureSwiper) {
        featureSwiper.destroy(true, true);
        featureSwiper = undefined;
    }
}
