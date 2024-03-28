const loginForm = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();
    

    const data = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim()
}
    if (data.email === '' || data.password === '') {
        alert('All form fields must be filled in');
        return;
    }

    console.log(data);
    loginForm.reset();
}

loginForm.addEventListener('submit', onFormSubmit);
