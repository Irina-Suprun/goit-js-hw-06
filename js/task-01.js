
const categoriesAllItemsEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesAllItemsEl.length);

const categoryTitle1 = categoriesAllItemsEl[0].firstElementChild;
console.log('Category:', categoryTitle1.textContent);
const itemsTitle1El = categoryTitle1.nextElementSibling;
console.log('Elements:', itemsTitle1El.children.length);

const categoryTitle2 = categoriesAllItemsEl[1].firstElementChild;
console.log('Category:', categoryTitle2.textContent);
const itemsTitle2El = categoryTitle2.nextElementSibling;
console.log('Elements:', itemsTitle2El.children.length);

const categoryTitle3 = categoriesAllItemsEl[2].firstElementChild;
console.log('Category:', categoryTitle3.textContent);
const itemsTitle3El = categoryTitle3.nextElementSibling;
console.log('Elements:', itemsTitle3El.children.length);
