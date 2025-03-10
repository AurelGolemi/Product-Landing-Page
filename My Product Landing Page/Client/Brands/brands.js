const fitsContainer = document.getElementById('fits');
const btn3x3 = document.getElementById('grid-3x3');
const btn4x4 = document.getElementById('grid-4x4');

function setGrid(columns) {
  fitsContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

btn3x3.addEventListener('click', () => setGrid(3));
btn4x4.addEventListener('click', () => setGrid(4));