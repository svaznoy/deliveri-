let modal = document.querySelector('#modal');
let basket = document.querySelector('#basket');
let closeEl = document.querySelector('#close');

basket.addEventListener('click', function () {
    modal.classList.add('modal_open');
});

closeEl.addEventListener('click', function () {
    modal.classList.remove('modal_open');
});

new WOW().init();