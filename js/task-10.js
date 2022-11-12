const createEl = document.querySelector('[data-create]');
// console.log(createEl);

const destroyEl = document.querySelector('[data-destroy]');
// console.log(destroyEl);

const inputEl = document.querySelector('input');
// console.log(inputEl);

const boxesEl = document.querySelector('#boxes');
// console.log(boxesEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function counterSize() {
  let count = 20;
  return function () {
    count += 10;
    return count;
  };
}
const boxCounterSize = counterSize();

const array = [];

function createBoxes(amount) {
  amount = inputEl.value;

  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement('div');
    newEl.style.width = boxCounterSize() + 'px';
    newEl.style.height = newEl.style.width;

    newEl.style.backgroundColor = getRandomHexColor();
    array.push(newEl);

    boxesEl.append(...array);
    array.splice(0);
  }
  // console.log(boxesEl);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
  array.splice(0);
}

createEl.addEventListener('click', createBoxes);
destroyEl.addEventListener('click', destroyBoxes);
