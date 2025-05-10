// Hamburger menu toggle
const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');

  // Optional: Change menu icon to X and back
  menuButton.textContent = navMenu.classList.contains('open') ? 'X' : '☰';
});

// Footer dynamic year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
