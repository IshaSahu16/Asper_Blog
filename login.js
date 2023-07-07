const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// add the register container
registerLink.addEventListener('click' , () => {
    logregBox.classList.add('active');
});

// remove the login container
loginLink.addEventListener('click' , () => {
    logregBox.classList.remove('active');
});