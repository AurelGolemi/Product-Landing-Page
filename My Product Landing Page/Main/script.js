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
  chatBox.classList.toggle('visible');
});

chatClose.addEventListener('click', () => {
  chatBox.classList.remove('visible');
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

  // Normalize message (lowercase, trimmed) for better matching
  const normalizedMessage = message.toLowerCase().trim();

  // Predefined responses

  if(message === "I'm looking for clothes.") {
    botMessage.textContent = 'Great! Are you shopping for men, women or kids?';
  } else if(message === "Where can I get them?") {
    botMessage.textContent = 'You can shop online or visit our nearest store.';
  } else if(message === "I need recommendations about your products.") {
    botMessage.textContent = 'We recommend checking out our latest collections for the season.';
  } else if(message === "Where to deliver?") {
    botMessage.textContent = 'Please provide your address for delivery.';
  } 

  // Dynamic responses based on keywords
    // else if (normalizedMessage.includes("men")) {
    //   botMessage.textContent = "We have a great selection of men's clothing! Check out our latest men's jackets, shirts and jeans.";
    // } else if (normalizedMessage.includes("women")) {
    //   botMessage.textContent = "Our women's collection is perfect for every occasion! Explore dresses, tops and accessories!";
    // } else if (normalizedMessage.includes("kids")) {
    //   botMessage.textContent = "For kids, we recommend our durable and stylish clothing line. Browse shirts, pants and more!";
    // } else if (normalizedMessage.includes("recommend")) {
    //   botMessage.textContent = "Based on your preferences, we suggest exploring our trending products this season!";
    // } else if (normalizedMessage.includes("delivery")) {
    //   botMessage.textContent = "We deliver across various locations. Please share your city or zip code for details!";
    // }


  if (normalizedMessage.includes("men")) {
    botMessage.innerHTML = `
      <div id="men" class="shop-men"">
        <h4>Top picks for Men:</h4>
        <div class="shop-men-clothing" style="margin: 10px;">
          <img src="../Client/Men/Men Clothing Fits/nike-m-nk-tch-flc-fz-wr-hoodie.jpg"><br>
          <a href="../Client/Men/men.html">Nike Tech Fleece Men's Track Top</a><br>
        </div> 
        <div class="shop-men-clothing" style="margin: 10px;">
          <img src="../Client/Men/Men Clothing Fits/the-north-face-m-kaveh-fullzip-tnf-black-smoke.jpg"><br>
          <a href="../Client/Men/men.html">The North Face Tek Men's Track Top</a>
        </div> 
      </div>

      <p style="margin-top: 4px;">Here are some recommendations for men's clothing: </p>
      <ul>
        <li><a href="../Client/Men/men.html">Men's Clothing</a></li>
      </ul>
    `
  } else if (normalizedMessage.includes("woman")) {
    botMessage.innerHTML = `
      <div id="women" class="shop-women"">
        <h4>Top picks for Women:</h4>
        <div class="shop-women-clothing" style="margin: 10px;">
          <img src="../Client/Women/Women Clothing Fits/nike-w-nsw-phnx-flc-oos-crew.jpg"><br>
          <a href="../Client/Men/men.html">Nike Phoenix Fleece Oversized Women's Sweatshirt</a><br>
        </div> 
        <div class="shop-women-clothing" style="margin: 10px;">
          <img src="../Client/Women/Women Clothing Fits/the-north-face-w-relax-mtn-photo-ls-tnf-black.jpg"><br>
          <a href="../Client/Women/women.html">The North Face Mountain Women's Long-sleeve Top</a>
        </div> 
      </div>

      <p style="margin-top: 4px;">Here are some recommendations for women's clothing: </p>
      <ul>
        <li><a href="../Client/Women/women.html">Women's Clothing</li>
      </ul>
    `
  } else if (normalizedMessage.includes("kids")) {
    botMessage.innerHTML = `
      <div id="kids" class="shop-kids"">
        <h4>Top picks for Men:</h4>
        <div class="shop-kids-clothing" style="margin: 10px;">
          <img src="../Client/Kids/Kids Clothing Fits/nike-b-nsw-tch-flc-fz-pd.jpg"><br>
          <a href="../Client/Kids/kids.html">Nike Tech Fleece Kids' Track Top</a><br>
        </div> 
        <div class="shop-kids-clothing" style="margin: 10px;">
          <img src="../Client/Kids/Kids Clothing Fits/jordan-jmpmn-pad-jkt-blk-gry.jpg"><br>
          <a href="../Client/Men/men.html">Jordan Jumpman Kids' Jacket</a>
        </div> 
      </div>

    <p style="margin-top: 4px;">Here are some recommendations for kids clothing: </p>
    <ul>
      <li><a href="../Client/Kids/kids.html">Kids' Clothing</li>
    </ul>
  `
  }
  // Default fallback
  else {
    botMessage.textContent = 'Thank you for reaching out! How else can we assist you? Can you provide more details so we can assist you better?';
  }

  chatBody.appendChild(botMessage);
  chatBody.scrollTop = chatBody.scrollHeight;
}