const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email === '' || password === '') {
    return alert('Всі поля повинні бути заповнені');
  }
  const userFormData = {
    email,
    password,
  };
  console.log(userFormData);
  event.currentTarget.reset();
}

// варіант 2

// function onFormSubmit(event) {
//   event.preventDefault();
//   const element = event.currentTarget.elements;
//   if (element.email.value === '' || element.password.value === '') {
//     return alert('Всі поля повинні бути заповнені');
//   }
//   const formUserData = new FormData(event.currentTarget);
//   formUserData.forEach((value, name) => {
//     const objectForm = {
//       name,
//       value,
//     };
//     console.log(objectForm);
//   });

//   event.currentTarget.reset();
// }
// не вийшло об'єднати в один об'єкт
