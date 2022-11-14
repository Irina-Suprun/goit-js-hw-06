
const categoriesAllItemsEl = document.querySelectorAll('li.item');
console.log('Number of categories:', categoriesAllItemsEl.length);

for (let i = 0; i < categories.children.length; i += 1) {
    const categoryTitle = categories.children[i].firstElementChild;
    const itemsTitleEl = categoryTitle.nextElementSibling.children.length;
    console.log('Category:', categoryTitle.textContent);
    console.log('Elements:', itemsTitleEl);
}


