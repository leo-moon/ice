(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      closeMenuBtn2: document.querySelector('[data-menu-close-2]'),
      closeMenuBtn3: document.querySelector('[data-menu-close-3]'),
      closeMenuBtn4: document.querySelector('[data-menu-close-4]'),
      closeMenuBtn5: document.querySelector('[data-menu-close-5]'),
      menu: document.querySelector('[data-menu]'),
    };
    refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn2.addEventListener('click', toggleModal);
  refs.closeMenuBtn3.addEventListener('click', toggleModal);
  refs.closeMenuBtn4.addEventListener('click', toggleModal);
  refs.closeMenuBtn5.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();