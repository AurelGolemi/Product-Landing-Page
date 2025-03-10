const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

const fitsContainer = document.getElementById('fitsContainer');
const btn3x3 = document.getElementById('btn3x3');
const btn4x4 = document.getElementById('btn4x4');

function setGrid(columns) {
  fitsContainer.style.gridTemplateColumns = `repeat${columns}, 1fr`;

}

btn3x3.addEventListener('click', () => setGrid(3));
btn4x4.addEventListener('click', () => setGrid(4));