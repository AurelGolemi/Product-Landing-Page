const signUpBtn = document.getElementById('signUpBtn');

signUpBtn.addEventListener('click', function() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  const web_name = "";
  const web_email = "";
  const web_password = "";

  if (name === web_name && email === web_email && password === web_password) {
    window.location.href = '..Main/index.html';
  } else {

  };
});