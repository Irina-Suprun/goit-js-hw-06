const form = document.querySelector('.login-form')
console.log(form);
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email.length === 0 || password.length === 0) {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }
    const formData = {
        email, 
        password,
    }
    console.log(formData);
    form.reset();
}