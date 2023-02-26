const closeIcon = document.querySelector('.menu__close-icon'),
      burger = document.querySelector('.header__burger'),
      navLinks = document.querySelectorAll('.menu-nav a'),
      menu = document.querySelector('.menu'),
      body = document.body,
      html = document.documentElement,
      menuItemDropdownTrigger = document.querySelector('.menu-nav__item_dropdown'),
      menuDropdownList = document.querySelector('.menu-nav__dropdown'),
      menuModalTrggier = document.querySelector('.menu .modal-form-trigger');

function closeMenuByClick() {
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    })
  }
}

menuItemDropdownTrigger.addEventListener('click', function() {
  this.classList.add('menu-collapse');
})

menuModalTrggier.addEventListener('click', () => {
  modalForm.classList.add('show-modal')
  document.body.style.overflow = 'hidden'
  closeMenu();
  if (modalForm.classList.contains('show-modal')) {
    window.addEventListener('click', function(e) {
      if (e.target === modalForm.querySelector('.modal__overlay')) {
        modalForm.classList.remove('show-modal')
        document.body.style.overflow = ''
      }
    })
  }
})

closeMenuByClick();
function showMenu() {
  closeIcon.classList.remove('closed')
  burger.classList.toggle('active-burger');
  body.classList.add('body-locked')
  if (burger.classList.contains('active-burger')) {
    menu.classList.add('show-menu')
    body.classList.add('body-locked')
    html.classList.add('body-locked')
  } else {
    menu.classList.remove('show-menu')
    body.classList.remove('body-locked')
    html.classList.remove('body-locked');
  }
}

function closeMenu() {
  closeIcon.classList.add('closed');
  menu.classList.remove('show-menu');
  burger.classList.remove('active-burger');
  body.classList.remove('body-locked')
  html.classList.remove('body-locked');
}

if (burger) {
  closeIcon.addEventListener('click', closeMenu);
}

if (burger) {
  burger.addEventListener('click', showMenu);
}
