import throttle from 'lodash.throttle';
// import '../css/03-feedback.css';
// import '../css/common.css';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.input');
const textarea = document.querySelector('.textarea');
const STORAGE_KEY = 'feedback-form-state'

form.addEventListener('submit', onFormSubmit);
email.addEventListener('input', onEmail);
textarea.addEventListener('input', throttle(onTextarea, 500));



populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onEmail(evt) {
    const email = evt.target.value;
    localStorage.setItem(STORAGE_KEY, email);
}

function onTextarea(evt) {
    const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        textarea.value = savedMessage;
    }
}

console.log("AAAA");
console.log(localStorage);
