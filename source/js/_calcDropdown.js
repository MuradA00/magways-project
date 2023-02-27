const typeDropdownTrigger = document.querySelector('.calc__options-type'),
      typeDropdown = document.querySelector('.calc-type__dropdown'),
      typeDropdownOptions = document.querySelectorAll('.calc__type-dropdown-item'),
      dropdownBtns = document.querySelectorAll('.calc__btn-item');



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
