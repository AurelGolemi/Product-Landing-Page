const menuButton = document.getElementById('menu-toggle');
const responsiveMenu = document.getElementById('responsive-menu');

menuButton.addEventListener('click', function() {
  const menu = document.getElementById('responsive-menu');
  menu.classList.toggle('visible');
})

let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Thumbnail image controls

function setSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'; 
  }
  
  for(let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className.display += 'active';
  
}


function filterProducts(category) {
  const products = document.querySelectorAll('.outfits');

  products.forEach(productss => {
    if(productss.classList.contains(category)) {
      productss.style.display = 'block';
    } else {
      productss.style.display = 'none';
    }
  });
}

window.onload = () => filterProducts('shop-men-clothing');
// window.onload = () => filterProducts('shop-women-clothing');
// window.onload = () => filterProducts('shop-kids-clothing');

function scrollLogos(direction) {
  const slider = document.querySelector('.logo-slider');
  const scrollAmount = 1000;

  // Scroll left or right based on direction
  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth',
  });
}

