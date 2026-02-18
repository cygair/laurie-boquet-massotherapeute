// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Formulaire de contact — envoi via Formspree (sans ouvrir l'app courriel)
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const popup = document.getElementById('popupConfirmation');
let popupTimer = null;

function showPopup() {
  // Réinitialise l'animation de la barre si déjà affichée
  const bar = popup.querySelector('.popup-confirmation-bar');
  bar.style.animation = 'none';
  popup.classList.add('show');
  // Force reflow pour relancer l'animation
  void bar.offsetWidth;
  bar.style.animation = '';

  clearTimeout(popupTimer);
  popupTimer = setTimeout(() => {
    popup.classList.remove('show');
  }, 10000);
}

contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  submitBtn.disabled = true;
  submitBtn.textContent = 'Envoi en cours…';

  try {
    const response = await fetch('https://formspree.io/f/mnjbzven', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      contactForm.reset();
      showPopup();
    } else {
      alert('Une erreur est survenue. Veuillez réessayer ou me contacter par téléphone.');
    }
  } catch (err) {
    alert('Impossible d\'envoyer le message. Vérifiez votre connexion internet.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Envoyer le message';
  }
});
