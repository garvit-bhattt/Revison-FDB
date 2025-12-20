// Step 1: Get required DOM elements
var toggleBtn = document.getElementById("toggleBtn");
var body = document.body;

// Step 2: Add click event
toggleBtn.addEventListener("click", function () {

  // Write your logic here
  // Toggle "dark" class on body
  body.classList.toggle("dark")

});
