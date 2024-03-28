const listCategories = document.getElementById('categories');
const listItems = document.querySelectorAll('.item')


console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    

    const numberOfElements = item.querySelectorAll('ul li');

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberOfElements.length}`);
})



