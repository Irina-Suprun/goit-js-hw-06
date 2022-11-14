
const rangeChange = document.querySelector('#font-size-control');
const nameLabel = document.querySelector('#text');

rangeChange.addEventListener('input', onRangeChange);
function onRangeChange(event) {
    nameLabel.style.fontSize = event.currentTarget.value + 'px';
}
