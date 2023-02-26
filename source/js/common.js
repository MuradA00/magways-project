AOS.init({
  once: true
})


const reviews = new Swiper('.reviews__wrapper', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    950: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: '.reviews__arrow_next',
    prevEl: '.reviews__arrow_prev'
  }
})
