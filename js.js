const url = 'https://script.google.com/macros/s/AKfycbw58UgTOHpYsXbrM-Zf5LmAikBn-IljJgcDGGQiGeK6JFUHMJVXz-7n5IWamuiXbXGd/exec';
const form = document.getElementById('form-contacto');

form.addEventListener('submit', e => {
  return;
  e.preventDefault();
  fetch(url, { method: 'POST', body: new FormData(form), mode:"no-cors" })
    .then(response => {
      console.log(response);
      if (response.ok) {
        alert('Enviado!');
      } 
    })
    .catch(error => console.error('Error!', error.message));
});

const url2='https://script.google.com/macros/s/AKfycbxjjeXnmU1BVJcJIfA85qySRNOeKIAJeh7KvjFbjCPtPpAQhaHjmnrlpa0XzCLvL2zd1w/exec';
const form2 = document.getElementById('reserva');

form2.addEventListener('submit', e => {
  e.preventDefault();
  if (form2.name.value === '' || form2.dni.value === '' || form2.email.value === '' || form2.phone.value === '') {
    alert('Por favor complete todos los campos requeridos');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form2.email.value)) {
    alert('Por favor ingrese un email válido');
    return;
  }
  const phoneRegex = /^\d{10,15}$/;
  if (!phoneRegex.test(form2.phone.value)) {
    alert('Por favor ingrese un teléfono válido');
    return;
  }
  const ingreso = new Date(form2.ingreso.value);
  const egreso = new Date(form2.egreso.value);
  if (ingreso >= egreso) {
    alert('La fecha de ingreso debe ser anterior a la fecha de egreso');
    return;
  }
  fetch(url, { method: 'POST', body: new FormData(form2), mode:"no-cors" })
    .then(response => {
      console.log(response);
      if (response.ok) {
        alert('Enviado!');
      } 
    })
    .catch(error => console.error('Error!', error.message));

});
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});