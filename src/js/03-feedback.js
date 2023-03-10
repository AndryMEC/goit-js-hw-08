import '../css/03-feedback.css';
import '../css/common.css';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('email', onEmail);
refs.textarea.addEventListener('textarea', onTextarea);

// function onTextarea(e) {
//     const message = e.currentTarget.value;

//     localStorage.setItem('feedback-msg', message)
// }

const meaasge = "hallo";
console.log(message);