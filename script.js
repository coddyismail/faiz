const wishButton = document.querySelector('.wish-button');
const wishMessage = document.querySelector('.wish-message');

wishButton.addEventListener('click', () => {
  wishMessage.textContent = "May all your dreams come true";
  wishMessage.style.opacity = 1;

  // Reset the message after 3 seconds
  setTimeout(() => {
    wishMessage.style.opacity = 0;
  }, 5000);
});
