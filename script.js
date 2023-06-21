const subscribeBtn = document.querySelector('.subscribe-button');
const emailInput = document.querySelector('#email-input');
const invalidEmailInput = document.querySelector('.invalid-email-label');
const subscribeForm = document.querySelector('.subscribe-form');
const successPage = 'success.html';
// if (validateEmail(email.value)) {
//     subscribeBtn.style.background = 'hsl(4, 100%, 67%)';
//     subscribeBtn.style.cursor = 'pointer';
// }


emailInput.addEventListener('keyup', () => {
    const isValidEmail = validateEmail(emailInput.value);

    if (isValidEmail) {
        subscribeBtn.style.background = 'hsl(4, 100%, 67%)';
        subscribeBtn.style.cursor = 'pointer';
        invalidEmailInput.style.display = 'none';
        emailInput.classList.remove('invalid-email-input');         
}

    if (!isValidEmail) {
        subscribeBtn.style.background = 'hsl(235, 18%, 26%)';
        invalidEmailInput.style.display = 'inline';
        emailInput.classList.add('invalid-email-input');
    }
});

subscribeBtn.addEventListener('click', () => {
    const isValidEmail = validateEmail(emailInput.value);

    if (isValidEmail) {
        subscribeForm.setAttribute('action', successPage);
        subscribeForm.submit();
        console.log('OK');
     }
});

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };