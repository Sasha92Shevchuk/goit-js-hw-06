const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

const itemElPotatoes = document.createElement('li');
// console.log(itemElPotatoes);
itemElPotatoes.classList.add('item');
itemElPotatoes.textContent = ingredients[0];

const itemElMushrooms = document.createElement('li');
// console.log(itemElMushrooms);
itemElMushrooms.classList.add('item');
itemElMushrooms.textContent = ingredients[1];

const itemElGarlic = document.createElement('li');
// console.log(itemElGarlic);
itemElGarlic.classList.add('item');
itemElGarlic.textContent = ingredients[2];

const itemElTomatos = document.createElement('li');
// console.log(itemElTomatos);
itemElTomatos.classList.add('item');
itemElTomatos.textContent = ingredients[3];

const itemElHerbs = document.createElement('li');
// console.log(itemElHerbs);
itemElHerbs.classList.add('item');
itemElHerbs.textContent = ingredients[4];

const itemElCondiments = document.createElement('li');
// console.log(itemElCondiments);
itemElCondiments.classList.add('item');
itemElCondiments.textContent = ingredients[5];

ingredientsEl.append(
  itemElPotatoes,
  itemElMushrooms,
  itemElGarlic,
  itemElTomatos,
  itemElHerbs,
  itemElCondiments,
);

// Варіант №2

// const makeItemEl = array => {
//   return array.map(ingredient => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
//     itemEl.textContent = ingredient;
//     // console.log(itemEl);

//     return itemEl;
//   });
// };
// const elements = makeItemEl(ingredients);
// ingredientsEl.append(...elements);
