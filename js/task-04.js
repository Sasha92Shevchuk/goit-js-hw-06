const valueEl = document.querySelector('#value');

let counterValue = 0;
// console.log(valueEl.textContent);

const counterEl = document.querySelector('#counter');
// console.log(counterEl);
const btnDecrementEl = counterEl.firstElementChild;
// console.log(btnDecrementEl);
const btnIncrementEl = counterEl.lastElementChild;
// console.log(btnIncrementEl);

btnDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  console.log(counterValue);
});

btnIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
  console.log(counterValue);
});
