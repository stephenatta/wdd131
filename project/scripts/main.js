document.addEventListener("DOMContentLoaded", function () {
  // Footer year and last modified
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("currentyear");
  const lastModifiedElement = document.getElementById("lastModified");

  if (yearElement) {
    yearElement.textContent = currentYear;
  }

  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
  }

  // Hamburger menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("mainMenu");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("expanded");

      // Update aria-expanded attribute for accessibility
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }
});
