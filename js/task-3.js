const textInput = document.querySelector('[type="text"]');

const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', event => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue === '') {
        textOutput.textContent = 'Anonymous'
    } else {
        textOutput.textContent = inputValue;
    }
});

