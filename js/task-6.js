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
  const boxes = [];
  const quantityBoxes = input.value;
  
  for (let i = 0; i < quantityBoxes; i++) {
    const box = document.createElement('div');
    boxes.push(box);
  }

  container.append(...boxes);
  console.log(container);
  return container;

}

createBtn.addEventListener('click', createBox);
