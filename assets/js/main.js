AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  } else {
    targetTheme = "light";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme); // Save theme to localStorage
}


// To load the theme when the page loads
document.addEventListener("DOMContentLoaded", () => {

  const savedTheme = localStorage.getItem("theme") || "light"; // Default to light theme
  document.documentElement.setAttribute("data-theme", savedTheme);

});

document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("theme-toggle-button").addEventListener("click", toggleTheme);
});