const inputEl = document.querySelector('#name-input');
console.log(inputEl);
const inputValueEl = document.querySelector('#name-output');
console.log(inputValueEl.textContent.length);

const a = inputEl.addEventListener('input', text => {
  if (!text.currentTarget.value.trim().length) {
    inputValueEl.textContent = 'Anonymous';
  } else {
    inputValueEl.textContent = text.currentTarget.value;
  }
});
