const url = 'https://script.google.com/macros/s/AKfycbwlLgbcbVpK8-LU4xM0AEmGWQAkmXWYKXeMSBe-L6wDaRVVZJFcZxtsyY_Wu8WzO6NN/exec';
const form = document.forms['form-contact'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(url, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Enviado!', response))
    .catch(error => console.log('Error!', error.message));
});


const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});