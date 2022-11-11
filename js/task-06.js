// const textInput = document.querySelector('#validation-input');

// const inputLengthEl = Number(textInput.dataset.length);

// // textInput.addEventListener('focus', onInputFocus);
// textInput.addEventListener('blur', onInputBlur);

// // function onInputFocus() {
// //   console.log('Инпут получил фокус - событие focus');
// // }

// function onInputBlur() {
//   if (textInput.value.length !== inputLengthEl) {
//     textInput.style.borderColor = 'red';
//   } else {
//     textInput.style.borderColor = 'green';
//   }
// }

// 2 варіант
const textInput = document.querySelector('#validation-input');

const inputLengthEl = Number(textInput.dataset.length);

textInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
  if (textInput.value.length !== inputLengthEl) {
    textInput.classList.add('invalid');
  } else {
    // textInput.classList.add('valid');
    // textInput.classList.remove('invalid');
    textInput.classList.replace('invalid', 'valid');
  }
}
