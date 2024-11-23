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

// Live chat functionality

const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const chatClose = document.getElementById('chat-close');
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');
const options = document.querySelectorAll('.chat-option');

// Toggle chat visibility
chatToggle.addEventListener('click', () => {
  chatBox.classList.toggle = 'visible';
});

chatClose.addEventListener('click', () => {
  chatBox.classList.remove = 'visible';
});

// Handle option selection
options.forEach(option => {
  option.addEventListener('click', (e) => {
    const response = e.target.getAttribute('data-response');
    appendUserMessage(response);
    handleBotResponse(response);
  });
});

// Send user input
sendButton.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (message) {
    appendUserMessage(message);
    handleBotResponse(message);
    chatInput.value = '';
  }
});

// Append user message
function appendUserMessage(message) {
  const userMessage = document.createElement('p');
  userMessage.className = 'user-message';
  userMessage.textContent = message;
  chatBody.appendChild(userMessage);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Handle bot response
function handleBotResponse(message) {
  const botMessage = document.createElement('p');
  botMessage.className = 'bot-message';

  if(message.includes('👖 Looking for clothes')) {
    botMessage.textContent = 'Great! Are you shopping for men, women or kids?';
  } else if(message.includes('🌍 Where to buy')) {
    botMessage.textContent = 'You can shop online or visit our nearest store.';
  } else if(message.includes('❓ Recommendations')) {
    botMessage.textContent = 'We recommend checking out our latest collections for the season.';
  } else if(message.includes('🚚 Delivery options')) {
    botMessage.textContent = 'Please provide your address for delivery.';
  } else {
    botMessage.textContent = 'Thank you for reaching out! How else can we assist you?';
  }

  chatBody.appendChild(botMessage);
  chatBody.scrollTop = chatBody.scrollHeight;
}

