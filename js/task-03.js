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
const listGallery = document.querySelector('ul');

const galleryCard = images.map(
  image => `<li class = "gallery__item"><img class = "gallery__image" src = "${image.url}" alt = "${image.alt}"></img></li>`
).join("");

listGallery.insertAdjacentHTML('afterbegin', galleryCard);


// 2й способ:

// const makeGalleryCard = ({url, alt}) => {
//   const listEl = document.createElement('li');
//   listEl.classList.add('gallery__item');
  
//   const imageEl = document.createElement('img');
//   imageEl.classList.add('gallery__image');
//       imageEl.src = url;
//   imageEl.alt = alt;
  
//   listEl.append(imageEl);

//       return listEl;
//     }

// const cards = images.map(makeGalleryCard);
// listGallery.append(...cards);


