const textInput = document.querySelector('[type="text"]');

const textOutput = document.getElementById('name-output');

textInput.addEventListener('input', event => {
    textOutput.textContent = event.currentTarget.value.trim();
    if (textOutput.textContent === '' || textOutput.textContent === ' ') {
        textOutput.textContent = 'Anonymous'
    }
});

