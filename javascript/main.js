const allContent = document.querySelectorAll('.option-content-item');
const buttonOptionToggle = document.querySelectorAll('.op-link');
const allFaqContent = document.querySelectorAll('.faq-p');
const buttonFaqToggle = document.querySelectorAll('.faq-btn');
const email = document.querySelector('#email');
const menuContent = document.querySelector('.modal-navigation-mobile');
const menuNavWeb = document.querySelector('.nav-link-container');
const showButton = document.querySelector('.bars-btn');
const closeButton = document.querySelector('.close-modal');

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

// Function to validate email address
function validateEmail(input) {
  let inputWrap = input.parentElement;
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(mailformat)) {
    inputWrap.querySelector('input').classList.remove('fail');
    inputWrap.querySelector('img').classList.add('hide');
    inputWrap.querySelector('small').classList.add('hide');
    return true;
  } else {
    inputWrap.querySelector('input').classList.add('fail');
    inputWrap.querySelector('img').classList.remove('hide');
    inputWrap.querySelector('small').classList.remove('hide');
    validateEmail(input);
    return false;
  }
}

// Function to open and close modal navigation
function navMobileModal() {
  console.log(menuContent.classList.contains('hide'));
  if (menuContent.classList.contains('hide')) {
    menuContent.className = 'modal-navigation-mobile flex column';
    document.body.style.overflowY = 'hidden';
  } else {
    menuContent.className = 'modal-navigation-mobile hide';
    document.body.style.overflowY = 'visible';
  }
}

// Function to check if user resize the screen
function showNavWeb() {
  if (window.innerWidth > 768) {
    showButton.parentElement.className = 'hamburger-button hide';
    menuContent.className = 'modal-navigation-mobile hide';
    menuNavWeb.className = 'nav-link-container flex row';
  } else {
    showButton.parentElement.className = 'hamburger-button flex row';
    menuContent.className = 'modal-navigation-mobile hide';
    menuNavWeb.className = 'nav-link-container hide';
  }
}

// Running all functions
toggleOption(allContent, buttonOptionToggle);
toggleOption(allFaqContent, buttonFaqToggle);
clearToggle(allFaqContent, buttonFaqToggle);
document.querySelector('.btn.submit').addEventListener('click', (e) => {
  e.preventDefault();
  validateEmail(email);
});
showButton.addEventListener('click', navMobileModal);
closeButton.addEventListener('click', navMobileModal);
window.addEventListener('resize', showNavWeb);
