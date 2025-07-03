// responsive

const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// header scroll

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});



// Typing Effect
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Front-End Developer", "WordPress Expert", "Shopify Expert", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);


// generic scroll‑reveal
const revealEls = document.querySelectorAll('.scroll-animate');

function onScroll() {
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.7) {
      el.classList.add('show');     // draw
    } else {
      el.classList.remove('show');  // erase when scrolling back up
    }
  });
}
window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// projects
// Fade in project boxes on scroll
const projectCards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// skills
// Animate skills on scroll
const skillCards = document.querySelectorAll('.skill-card');

window.addEventListener('scroll', () => {
  skillCards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('visible');
    }
  });
});


// contact us alert message
// Thank You alert on form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting me! I will get back to you soon.");
  this.reset(); // Clear form
});

