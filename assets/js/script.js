const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

changeIcon = (icon) => icon.classList.toggle("fa-times");
document
  .querySelector(".nav-toggle")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Your code to toggle the navigation goes here
  });
