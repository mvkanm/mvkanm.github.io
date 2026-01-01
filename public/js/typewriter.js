const words = ['Hello!', 'Сәлем!', 'Привет!'];
const typeSpeed = 120;
const deleteSpeed = 80;
const wordDelay = 500;   // delay BEFORE typing
const afterTypeDelay = 1200;

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isWaiting = true;

const el = document.getElementById("intro-greeting");

function loop() {
  const word = words[wordIndex];

  // WAIT BEFORE TYPING
  if (isWaiting) {
    setTimeout(() => {
      isWaiting = false;
      loop(); // resume loop
    }, wordDelay);
    return;
  }

  // TYPING
  if (!isDeleting) {
    el.textContent = word.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === word.length) {
      setTimeout(() => isDeleting = true, afterTypeDelay);
    }
  }

  // DELETING
  else {
    el.textContent = word.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      isWaiting = true;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(loop, isDeleting ? deleteSpeed : typeSpeed);
}

loop();
