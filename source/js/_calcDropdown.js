const typeDropdownTrigger = document.querySelector('.calc__options-type'),
      typeDropdown = document.querySelector('.calc-type__dropdown'),
      typeDropdownOptions = document.querySelectorAll('.calc__type-dropdown-item'),
      dropdownBtns = document.querySelectorAll('.calc__btn-item'),
      optionsBtnsDropdown = document.querySelector('.calc__options-block-row'),
      hiddenBtns = document.querySelectorAll('.calc__hidden-btns-item'),
      levelPoints=  document.querySelectorAll('.calc__range-point');

levelPoints.forEach(level => {
  level.addEventListener('click', function() {
    levelPoints.forEach(lev => lev.classList.remove('point-selected'));
    this.classList.toggle('point-selected')
  })
})

for (let i = 0; i < levelPoints.length; i++) {
  levelPoints[0].classList.add('point-selected');
}

optionsBtnsDropdown.addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.toggle('collapse-hidden-btns');
  }
})

dropdownBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    this.style.display = 'none';
  })
})

function selectBtn(btns) {
  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      btns.forEach(block => {block.classList.remove('btn-active')})
      this.classList.add('btn-active')
    })
  })
}

selectBtn(document.querySelectorAll('.firstRow li'));
selectBtn(document.querySelectorAll('.secondRow li'));

typeDropdownTrigger.addEventListener('click', function() {
  this.classList.toggle('type-collapse');
})

typeDropdownOptions.forEach(option => {
  option.addEventListener('click', function() {
   document.querySelector('.calc__options-type-name').innerHTML = this.innerHTML;
  })
})

hiddenBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelector('.calc__btns').appendChild(this);
    this.classList.add('active-btn')
    if (btn.classList.contains('active-btn')) {
      btn.addEventListener('click', () => {
        btn.style.display = 'none';
      })
    }
  })
})

