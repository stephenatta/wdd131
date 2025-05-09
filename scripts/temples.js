// Hamburger menu toggle
document.getElementById('menu').addEventListener('click', () => {
    const nav = document.getElementById('navMenu');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  
    // Optional: Change menu icon to X and back
    const menuBtn = document.getElementById('menu');
    menuBtn.textContent = nav.style.display === 'flex' ? 'X' : '☰';
  });
  
  // Footer dynamic year and last modified date
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;
  