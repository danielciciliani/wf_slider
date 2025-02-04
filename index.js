console.log('a ver si funciona el slider ahora desde Vscode 1');

const swiper = new Swiper('.swiper-movies', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    createElements: true,
    pagination: true,
    autoplay: true,
    breakpoints: {
        640: {
        slidesPerView: 2,
        },
    },
});


