const modalForm = document.querySelector('#modalForm'),
      modalFormTrigger = document.querySelector('.modal-form-trigger'),
      modalFormCloseIcon = document.querySelector('#modalForm .modal__close');

function closeModal(closeIcon, modal) {
  closeIcon.addEventListener('click', () => {
    modal.classList.remove('show-modal'),
    document.body.style.overflow = ''
  });
 }

 if (modalForm) {
  modalFormTrigger.addEventListener('click', function() {
    modalForm.classList.add('show-modal')
    document.body.style.overflow = 'hidden'
    if (modalForm.classList.contains('show-modal')) {
      window.addEventListener('click', function(e) {
        if (e.target === modalForm.querySelector('.modal__overlay')) {
          modalForm.classList.remove('show-modal')
          document.body.style.overflow = ''
        }
      })
    }
  })
  closeModal(modalFormCloseIcon, modalForm);
}

