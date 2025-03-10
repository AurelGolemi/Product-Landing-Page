const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelectorAll('.menu'); // Support multiple menus

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const fitsContainer = document.getElementById('fits');
const btn3x3 = document.getElementById('grid-3x3');
const btn4x4 = document.getElementById('grid-4x4');

function setGrid(columns) {
  fitsContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

// function generateGrid(rows, cols) {
//   fitsGridContainer.innerHTML = '';
//   fitsGridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

//   for (let i = 0; i < rows * cols; i++) {
//     const clothingFits = document.getElementById('clothing-fits');
//     clothingFits.textContent = `Item ${i}`;
//     fitsGridContainer.appendChild(clothingFits); 
//   }
// }

btn3x3.addEventListener('click', () => setGrid(3));
btn4x4.addEventListener('click', () => setGrid(4));



