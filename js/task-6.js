function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const container = document.querySelector('#boxes');
const input = document.querySelector('[type=number]');


function createBox() {
  let quantityBoxes = parseInt(input.value);

  if (quantityBoxes >= 1 && quantityBoxes <= 100) {
  container.innerHTML = '';
  
  
  
  for (let i = 0; i < quantityBoxes; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    const color = getRandomHexColor();


    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    box.style.borderRadius = '5px';
    box.style.marginBottom = '10px';
    box.style.borderColor = '#2E2F42';
    box.style.borderStyle = 'solid';


    container.appendChild(box);
  }

  
    input.value = '';
  }
 
  return container;

}
function destroyBoxes() {
  container.innerHTML = '';
}


createBtn.addEventListener('click', createBox);
destroyBtn.addEventListener('click', destroyBoxes);

