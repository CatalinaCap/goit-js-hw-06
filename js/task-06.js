const inputElement = document.getElementById('validation-input');
function validateInput() {
  const requiredLength = parseInt(inputElement.getAttribute('data-length'), 10); 
    const inputLength = inputElement.value.length;
     if (inputLength === requiredLength) {
    inputElement.classList.add('valid'); 
    inputElement.classList.remove('invalid'); 
  } else {
    inputElement.classList.add('invalid'); 
    inputElement.classList.remove('valid'); 
  }
}
inputElement.addEventListener('blur', validateInput);