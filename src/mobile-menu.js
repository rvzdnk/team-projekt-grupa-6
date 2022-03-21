(() => {
    const refs = {
        openModalBtn: document.querySelector('[mobile-menu--open]'),
        modal: document.querySelector('[mobile-menu]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('mobile-menu--is-hidden');
    }
})();