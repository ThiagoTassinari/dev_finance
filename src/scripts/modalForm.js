// const Modal = {
//     open() {
//         document.querySelector('.modal__overlay').classList.add('active');   
//     },
//     close() {
//         document.querySelector('.modal__overlay').classList.remove('active');
//     }
// }

const modal = document.querySelector('.modal__overlay');

function modalNewTransaction() {
    modal.classList.toggle('active');
}