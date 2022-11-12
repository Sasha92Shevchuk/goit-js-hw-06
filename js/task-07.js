const inputEl = document.querySelector('#font-size-control');
// console.log(inputEl);
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onFontSizeChange);

function onFontSizeChange() {
  spanEl.style.fontSize = inputEl.value + 'px';
}
onFontSizeChange();
