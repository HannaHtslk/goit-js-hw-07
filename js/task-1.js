
const listItems = document.querySelectorAll('.item')


console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
    const categoryTitle = item.querySelector('h2').textContent;
    

    const categoryElements = item.querySelectorAll('ul li');

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
})



