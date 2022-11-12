const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

for (let i = 0; i < categories.children.length; i += 1) {
  console.log(
    `Category: ${categories.children[i].querySelector('h2').textContent}`,
  );
  console.log(
    `Elements: ${categories.children[i].querySelector('ul').children.length}`,
  );
}

// з масивом не вийшло...

// const arrayCategories = [categories];

// arrayCategories.forEach(element => {
//   console.log(
//     `Category: ${element.querySelector('h2').textContent}
//     Elements: ${element.querySelector('ul').children.length}`,
//   );
// });
