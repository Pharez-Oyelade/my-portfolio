// import Splide from '@splidejs/splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

// const splide = new Splide( '.splide', {
//   type   : 'loop',
//   drag   : 'free',
//   focus  : 'center',
//   perPage: 3,
//   autoScroll: {
//     speed: 1,
//   },
// } );

// splide.mount();

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    breakpoints: {
        820: {
            slidesPerView: 3,
        },
        477: {
            slidesPerView: 2,
        }
    },

    injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
            color: black;
        }
        `
    ]
});

const slider = new Swiper('.slider', {
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
});