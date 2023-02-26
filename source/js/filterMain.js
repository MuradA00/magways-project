var allNewsMixer = mixitup('.cases__flex', {
  selectors: {
    target: '.cases__flex-item'
},
    animation: {
        duration: 400
    }
});

const filterBtns = document.querySelectorAll('.cases__filter-btn');

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[0].classList.add('mixitup-control-active')
}
