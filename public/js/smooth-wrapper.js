const details = document.querySelector('.ABOUT-facts-about-me');
const summary = details.querySelector('summary');

summary.addEventListener('click', (e) => {
  if (details.open) {
    e.preventDefault(); 

    details.classList.add('closing');

    setTimeout(() => {
      details.open = false;
      details.classList.remove('closing');
    }, 400); 
  }
});