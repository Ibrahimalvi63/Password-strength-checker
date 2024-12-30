function checkPassword(){
  const password = document.getElementById('password');
  const msg = document.getElementById('msg');
  if (!password.value) {
    msg.innerHTML = 'Input your password';
    msg.style.color = 'orangered';
  }
  else if (password.value.length <5) {
    msg.innerHTML = 'weak password';
    msg.style.color = 'red';
    
  }
  else if (password.value.length >=5 && password.value.length <8) {
    msg.innerHTML = 'password strength is medium';
    msg.style.color = 'blue';
    
  }
  else {
    msg.innerHTML = 'strong password';
    msg.style.color = 'green';
  }
  
  console.log(password.value)
}
