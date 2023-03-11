// import '../css/03-feedback.css';
// import '../css/common.css';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmit);
// email.addEventListener('email', onEmail);
textarea.addEventListener('textarea', onTextarea);



populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    
    e.currentTarget.reset();
    localStorage.removeItem('feedback-msg');
}

function onTextarea(e) {
    const message = e.currentTarget.value;

    localStorage.setItem('feedback-msg', message)
}

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-msg')

    if (savedMessage) {
        console.log(savedMessage);
    }

}

console.log("AAAA");
console.log(localStorage);
