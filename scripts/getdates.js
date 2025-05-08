// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date
const lastModified = document.lastModified;
document.querySelector(".last-modified").textContent = `Last modified: ${lastModified}`;
