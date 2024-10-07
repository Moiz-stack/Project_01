// Toggle mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  mobileMenu.classList.toggle('active');  // Toggle the active class
});

// Initialize particles.js
document.addEventListener("DOMContentLoaded", function() {
  const typingText = document.querySelector('.typing-text');
  const text = 'Welcome to Moiz-Stack';
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type(); // Call the typing function

});

