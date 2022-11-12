const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const makeImgMarkup = ({ url, alt }) => {
  return `<li class = 'item'> <img src = '${url}' alt = '${alt}' width = 100> </li>`;
};

const makeImgRows = images.map(makeImgMarkup).join('');

galleryEl.insertAdjacentHTML('beforeend', makeImgRows);

// long decides
// const adressImages = images.map(image => image.url);
// // console.log(adressImages);
// const descriptionImages = images.map(image => image.alt);
// console.log(descriptionImages);

// const itemElfirst = document.createElement('li');
// itemElfirst.classList.add('item');
// const imgElfirst = document.createElement('img');
// imgElfirst.src = adressImages[0];
// imgElfirst.alt = descriptionImages[0];
// imgElfirst.width = 100;
// // console.log(imgElfirst);
// itemElfirst.appendChild(imgElfirst);
// console.log(itemElfirst);

// const itemElsecond = document.createElement('li');
// itemElsecond.classList.add('item');
// const imgElsecond = document.createElement('img');
// imgElsecond.src = adressImages[1];
// imgElsecond.alt = descriptionImages[1];
// imgElsecond.width = 100;
// itemElsecond.appendChild(imgElsecond);
// console.log(itemElsecond);

// const itemElthird = document.createElement('li');
// itemElthird.classList.add('item');
// const imgElthird = document.createElement('img');
// imgElthird.src = adressImages[2];
// imgElthird.alt = descriptionImages[2];
// imgElthird.width = 100;
// itemElthird.appendChild(imgElthird);
// console.log(itemElthird);

// galleryEl.append(itemElfirst, itemElsecond, itemElthird);
