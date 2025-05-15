document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  
    // Set last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
      lastModifiedElement.textContent = document.lastModified;
    }
  
    // Get temperature and wind speed
    const tempElement = document.getElementById("temp");
    const speedElement = document.getElementById("speed");
    const chillElement = document.getElementById("chill");
  
    if (tempElement && speedElement && chillElement) {
      const temp = parseFloat(tempElement.textContent);
      const speed = parseFloat(speedElement.textContent);
  
      if (!isNaN(temp) && !isNaN(speed)) {
        if (temp <= 50 && speed > 3) {
          const chill = calculateWindChill(temp, speed).toFixed(1);
          chillElement.textContent = `${chill} °F`;
        } else {
          chillElement.textContent = "N/A";
        }
      } else {
        chillElement.textContent = "Data Error";
      }
    }
  });
  
  // Wind chill formula
  function calculateWindChill(tempF, speed) {
    return (
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * tempF * Math.pow(speed, 0.16)
    );
  }
  