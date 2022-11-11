const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const inputValueEl = document.querySelector('#name-output');
console.log(inputValueEl);

const a = inputEl.addEventListener('input', text => {
  inputValueEl.textContent = text.currentTarget.value;
});
