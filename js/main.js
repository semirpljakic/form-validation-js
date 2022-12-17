let username = document.querySelector('input[type="text"]');
let password = document.querySelector("input[type='password']");
let email = document.querySelector('input[type="email"]');
let myBtn = document.querySelector("input[type='submit']");
let myForm = document.querySelector('form');
let newDiv = document.querySelector('.newDiv');
// console.log(username, password, email, myBtn);

myBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let userData = {
    uv: username.value,
    pv: password.value,
    ev: email.value,
  };

  let erorrs = [];
  if (userData.uv.lenght > 20 || userData.uv.length == 0) {
    username.style.border = '1px solid tomato';
    username.setAttribute('title', 'Predugacak username ili je prazan!');
    erorrs.push('Predugacak username!');
  } else {
    username.style.border = '1px solid green';
    username.setAttribute('title', 'Username je okej!');
  }
  if (userData.pv !== '12345') {
    password.style.border = '1px solid tomato';
    password.setAttribute('title', 'Password nije tacan!');
    erorrs.push('Password nije tacan!');
  } else {
    password.style.border = '1px solid green';
    password.setAttribute('title', 'Password je okej!');
  }
  if (userData.ev.indexOf('@gmail.com') == -1) {
    email.style.border = '1px solid tomato';
    email.setAttribute('title', 'Email mora biti @gmail.com');
    erorrs.push('Email mora biti @gmail.com');
  } else {
    email.style.border = '1px solid green';
    email.setAttribute('title', 'Email je okej!');
  }

  if (erorrs.length == '') {
    myForm.submit();
  } else {
    let erorr = '';
    for (let i = 0; i < erorrs.length; i++) {
      erorr += erorrs[i] + '<br>';
    }
    newDiv.innerHTML = erorr;
    newDiv.style.border = '1px solid tomato';
  }
});
