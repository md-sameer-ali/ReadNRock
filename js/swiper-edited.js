var swiper = new Swiper(".mySwiper", {
    slidesPerView: 10,
    spaceBetween: 7,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        },
        1366: {
            slidesPerView: 10,
        },
    },
});