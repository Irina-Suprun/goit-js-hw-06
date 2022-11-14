const inputNumber = document.querySelector('[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


createButton.addEventListener('click', onCreateButton);
destroyButton.addEventListener('click', onDestroyButton);

function onCreateButton(inputNumber) {
  return createBoxes();
}

function onDestroyButton(event) {
  return destroyBoxes();
}
function getAmount() {
  const amount = inputNumber.value;
  return amount;
}
function createBoxes(amount) {
  const boxEl = document.createElement('div');
  for (let i = 0; i < amount; i += 1) {
    boxEl.append(i);
  }
}
function destroyBoxes(amount) {
  boxEl.remove();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}