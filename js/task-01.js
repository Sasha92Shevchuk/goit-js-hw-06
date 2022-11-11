const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

const animals = categories.firstElementChild;
const getTitleAnimals = animals.querySelector('h2');
console.log(`Category: ${getTitleAnimals.textContent}`);
const animalsEl = animals.querySelector('ul');
console.log(`Elements: ${animalsEl.children.length}`);

const products = animals.nextElementSibling;
const getTitleProducts = products.querySelector('h2');
console.log(`Category: ${getTitleProducts.textContent}`);
const productsEl = products.querySelector('ul');
console.log(`Elements: ${productsEl.children.length}`);

const technologies = categories.lastElementChild;
const getTitleTechnologies = technologies.querySelector('h2');
console.log(`Category: ${getTitleTechnologies.textContent}`);
const technologiesEl = animals.querySelector('ul');
console.log(`Elements: ${technologiesEl.children.length}`);

// ==> який варіант кращий в рішенні?

// const itemEl = document.querySelectorAll('.item');
// // console.log(itemEl);
// console.log(`Number of categories: ${itemEl.length}`);

// const titleAnimals = document.querySelector('.item h2');
// // console.log(titleAnimals);
// console.log(`Category: ${titleAnimals.textContent}`);

// const animalsItems = titleAnimals.nextElementSibling;
// // console.log(animalsItems);
// console.log(`Elements: ${animalsItems.children.length}`);

// const titleProducts = document
//   .querySelector('.item')
//   .nextElementSibling.querySelector('h2');
// console.log(`Category: ${titleProducts.textContent}`);

// const productsItems = titleProducts.nextElementSibling;
// // console.log(productsItems);
// console.log(`Elements: ${productsItems.children.length}`);

// const titleTechnologies = itemEl[2].querySelector('h2');
// console.log(`Category: ${titleTechnologies.textContent}`);

// const technologiesItems = titleTechnologies.nextElementSibling;
// console.log(`Elements: ${technologiesItems.children.length}`);
