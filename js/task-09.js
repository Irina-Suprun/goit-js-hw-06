function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const bgColor = document.querySelector('.color');
const bodyBgColor = document.querySelector('body');

btnChangeColor.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor(event) {
  bgColor.textContent = getRandomHexColor();
  bodyBgColor.style.backgroundColor = getRandomHexColor();
}
