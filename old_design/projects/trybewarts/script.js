const email = document.querySelector('#email-login');
const password = document.querySelector('#password-login');
const buttonLogin = document.querySelector('#button-login');
// const header = document.querySelector('.header');

// // Requisito 2
// function Logo() {
//   const imgLogo = document.createElement('img');
//   imgLogo.className = 'trybewarts-header-logo';
//   imgLogo.src = 'images/trybewarts-header-logo.svg';
//   header.appendChild(imgLogo);
// }Logo();

// Requisito 3
buttonLogin.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

window.addEventListener('click', (event) => {
  console.log(event);
});

const checkbox = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');
checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});
