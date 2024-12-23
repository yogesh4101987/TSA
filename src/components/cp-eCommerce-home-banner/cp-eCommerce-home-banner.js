let swiper;

document.addEventListener("DOMContentLoaded", () => {
    initializeCategorySlider();
});


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
    if (!swiper) {
        swiper = new Swiper(".js-feature-banner", {
            slidesPerView: 6,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: ".swiper-button-next.feature-next",
                prevEl: ".swiper-button-prev.feature-prev",
            },
        });
    }
}


function initializeCategorySlider() {
    // Check if Swiper container exists
    const swiperContainer = document.querySelector(".js-category-banner");
    if (!swiperContainer) {
        console.error("Swiper container (.js-category-banner) not found!");
        return;
    }

    // Validate Swiper wrapper
    const wrapper = swiperContainer.querySelector(".swiper-wrapper");
    if (!wrapper) {
        console.error("Swiper wrapper (.swiper-wrapper) not found inside .js-category-banner!");
        return;
    }

    // Validate Swiper slides
    const slides = wrapper.querySelectorAll(".swiper-slide");
    if (slides.length === 0) {
        console.error("No slides (.swiper-slide) found inside .swiper-wrapper!");
        return;
    }

    // Initialize Swiper
    try {
        swiper = new Swiper(".js-category-banner", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: ".swiper-button-next.feature-next",
                prevEl: ".swiper-button-prev.feature-prev",
            },
        });
        console.log("Swiper initialized successfully!");
    } catch (error) {
        console.error("Error initializing Swiper:", error);
    }
}

function destroySwiper() {
    if (swiper) {
        swiper.destroy(true, true);
        swiper = undefined;
        console.log("Swiper destroyed.");
    }
}