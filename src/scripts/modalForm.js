const Modal = {
    open() {
        document.querySelector('.modal__overlay').classList.add('active');
        
    },
    close() {
        // Fechar modal
        document.querySelector('.modal__overlay').classList.remove('active');
    }
}