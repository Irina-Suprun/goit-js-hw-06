
const rangeChange = document.querySelector('#font-size-control');
const nameLabel = document.querySelector('#text');

rangeChange.addEventListener('change', onRangeChange);
function onRangeChange(event) {
    nameLabel.style.fontSize = event.currentTarget.value + 'px';
}
