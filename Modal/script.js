'use strict';

let showModals = document.querySelectorAll('.show-modal');
let hiddenModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');


function hasClass(className) {
    return this.classList.contains(className)
}

let openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

let hideModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

showModals.forEach(showModal => {
    showModal.addEventListener('click', openModal);
});

hiddenModal.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !hasClass.call(modal, 'hidden')) {
        hideModal();
    };
});
