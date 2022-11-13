const textInput = document.querySelector('#name-input');
const output = document.querySelector("#name-output");
console.log(output.textContent);
textInput.addEventListener("input", (event) => {
    
    if (event.currentTarget.value === "") {
        output.textContent = 'Anonymous';
    }
    else {
        output.textContent = event.currentTarget.value;
    }
});


