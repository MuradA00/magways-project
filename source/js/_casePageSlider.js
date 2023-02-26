const caseSlider = new Swiper('.case-main__inner', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  pagination: {
    el: '.case-main__pagination'
  },
  navigation: {
    nextEl: '.case-main__arrow_next',
    prevEl: '.case-main__arrow_prev'
  },
  breakpoints: {
    1280: {
      spaceBetween: 110
    }
  }
})
