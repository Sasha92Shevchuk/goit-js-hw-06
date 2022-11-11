function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
// body.style.backgroundColor = getRandomHexColor();

const buttonChangeColorEl = document.querySelector('.change-color');
// console.log(buttonChangeColorEl);

const nameColorEl = document.querySelector('.color');
// console.log(nameColorEl.textContent);

function onChangeColorBody() {
  body.style.backgroundColor = getRandomHexColor();
  nameColorEl.textContent = body.style.backgroundColor;
}

buttonChangeColorEl.addEventListener('click', onChangeColorBody);
