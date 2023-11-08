const url = 'https://script.google.com/macros/s/AKfycbzMov9nHGjQAX2ObdPJF1Tw9EEYQ3CJlMNLYMAEr24MUp3MS6d2c6fxKu2qWcqg_xYF/exec';
const form = document.forms['contact'];

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(url, { method: 'POST', body: new FormData(form)})
    .then(response =>alert('Enviado!', response))
    .catch(error => console.error('Error!', error.message))
})

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});