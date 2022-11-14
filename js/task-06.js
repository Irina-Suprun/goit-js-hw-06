const textInput = document.querySelector("#validation-input");
const inputLength = Number(textInput.dataset.length);
console.log(inputLength);

textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === inputLength) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
    else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
});
