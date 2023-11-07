const url = 'https://script.google.com/macros/s/AKfycbyAyv3tzeY1oNjzQs9PTXnJiBppxJ3EarsMWEIjdaQt52uR8VK8zP0mJ2vrVE4uyoU8/exec';
const form = document.forms['contact'];
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(url, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Enviado!', response))
    .catch(error => console.log('Error!', error.message));
});
