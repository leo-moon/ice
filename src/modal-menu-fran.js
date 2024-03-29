(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-f]"),
      closeModalBtn: document.querySelector("[data-modal-close-f]"),
      modal: document.querySelector("[data-modal-f]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();