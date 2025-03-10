const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('submit', function() {
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  const web_name = "Aurel Golemi";
  const web_email = "golemiaurel68@gmail.com";
  const web_password = "Aurelios2005";

  if (name === web_name && email === web_email && password === web_password) {
    window.location.href = '../Main/index.html';
  } else {
    // alert('Your email or password is incorrect. Please try again.');
  }
});