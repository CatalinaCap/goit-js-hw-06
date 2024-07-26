const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');
const numberOfCategories = items.length;
console.log(`Number of categories: ${numberOfCategories}`);
items.forEach(item => {
 
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul > li').length;
     console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});