const allContent = document.querySelectorAll('.option-content-item');
const buttonOptionToggle = document.querySelectorAll('.op-link');
const allFaqContent = document.querySelectorAll('.faq-p');
const buttonFaqToggle = document.querySelectorAll('.faq-btn');
let listenClick = '';

// Function to toggle option based on user clicked
function toggleOption(arrayContent, arrayButton) {
  arrayButton.forEach((button, i) => {
    button.addEventListener('click', () => {
      arrayContent.forEach((content) => {
        content.classList.add('hide');
      });
      arrayButton.forEach((button) => {
        button.parentElement.classList.remove('active');
      });
      arrayContent[i].classList.remove('hide');
      button.parentElement.classList.add('active');
    });
  });
}

// Function to clear or to close content if user click same content
function clearToggle(arrayContent, arrayButton) {
  arrayButton.forEach((button, i) => {
    button.addEventListener('click', () => {
      if (listenClick === '') {
        listenClick = i;
      } else if (listenClick === i) {
        listenClick = '';

        // Clear all filters
        button.parentElement.classList.remove('active');
        arrayContent[i].classList.add('hide');
      } else {
        listenClick = i;
      }
    });
  });
}

// Running all functions
toggleOption(allContent, buttonOptionToggle);
toggleOption(allFaqContent, buttonFaqToggle);
clearToggle(allFaqContent, buttonFaqToggle);
