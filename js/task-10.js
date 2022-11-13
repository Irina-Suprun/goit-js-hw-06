function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


createButton.addEventListener('click', onCreateButton);
destroyButton.addEventListener('click', onDestroyButton);

function onCreateButton(event) {
  
}

function onDestroyButton(event) {
  
}
function getAmount() {
  const amount = inputNumber.value
  return amount;
}
function createBoxes(amount) {
  
}