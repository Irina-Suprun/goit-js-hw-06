const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('ul');

const makeIngredients = options => {
  return options.map(
    option => {
      const listEl = document.createElement('li');
      listEl.textContent = option;

      return listEl;
    });
}
const elements = makeIngredients(ingredients);
ingredientsList.append(...elements);

// Способ 2
// const elements = ingredients.map(
//   option => {
//     const listEl = document.createElement('li');
//     listEl.textContent = option;
//     // listElPotatoes.classList.add("item");

//     return listEl;
//   }
// );
// console.log(elements);
// ingredientsList.append(...elements);


// Способ 3
// const listElPotatoes = document.createElement('li');
// listElPotatoes.textContent = 'Potatoes';
// listElPotatoes.classList.add("item");
// console.log(listElPotatoes);

// const listElMushrooms = document.createElement('li');
// listElMushrooms.textContent = 'Mushrooms';
// listElMushrooms.classList.add("item");
// console.log(listElMushrooms);

// const listElGarlic = document.createElement('li');
// listElGarlic.textContent = 'Garlic';
// listElGarlic.classList.add("item");
// console.log(listElGarlic);

// const listElTomatos = document.createElement('li');
// listElTomatos.textContent = 'Tomatos';
// listElTomatos.classList.add("item");
// console.log(listElTomatos);

// const listElHerbs = document.createElement('li');
// listElHerbs.textContent = 'Herbs';
// listElHerbs.classList.add("item");
// console.log(listElHerbs);

// const listElCondiments = document.createElement('li');
// listElCondiments.textContent = 'Condiments';
// listElCondiments.classList.add("item");
// console.log(listElCondiments);

// const ingredientsList = document.querySelector('ul');
// ingredientsList.after(listElPotatoes, listElMushrooms, listElGarlic, listElTomatos, listElHerbs, listElCondiments);
// // console.log(ingredientsList);

