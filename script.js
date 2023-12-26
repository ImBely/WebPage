const form = document.getElementById('form'); /*Para manipular los elementos que estan en ese HTML y cambiarlos*/ 
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => { /*Detector de eventos, se activa cuando se envia el formulario. */
  e.preventDefault(); /* evita que el formulario se envíe de la manera tradicional (es decir, enviando una solicitud a un servidor)*/ 

  validateInputs(); /*Inicia el proceso de validacion*/
});

const sendData = (username)

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => { /*Chequear si es valido el email */
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const usernameValue = username.value.trim(); /*Trim for cutting spaces*/ 
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === '') {
    setError(username, 'Username is required');
    } else {
      setSuccess(username);
    }
    if(emailValue === '') {
      setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
    } else {
      setSuccess(email);
    }

    if(passwordValue === ' ') {
      setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
      setError(password, 'Password must be at least 8 character.');
    } else {
      setSuccess(password);
    }

    if(password2Value === '') {
      setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue ){
      setError(password2, "Passwords doesn't match");
    } else {
      setSuccess(password2);
    }
}

