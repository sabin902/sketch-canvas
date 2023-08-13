// script.js
const gridContainer = document.querySelector('.grid-container');



// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //controlling item color
const btn1 = document.getElementById('black')

const btn2 = document.getElementById('random')

//btn3 making with js only
const btn3 = document.createElement('button')
btn3 .id = 'undo'
btn3.textContent = "undo"
const body = document.body
body.append(btn3)
let color;
btn1.addEventListener('click', () => {
    color = "black"
})
btn2.addEventListener('click', () => {
    color = getRandomColor()
})
btn3.addEventListener('click', () => {

    color = '#fff';
})


// Create grid items
for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  gridContainer.appendChild(gridItem);
  
  // Add click event listener to change item color
  gridItem.addEventListener('click', () => {

    gridItem.style.backgroundColor = color;

  });
}

//clear button

const btn4 = document.createElement('button')
btn4.id = 'clear'
btn4.textContent = "clear"

body.append(btn4)
function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.style.backgroundColor = '#fff';
    });
  }
btn4.addEventListener('click' ,clearGrid)