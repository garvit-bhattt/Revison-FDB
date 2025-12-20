// Step 1: Get required DOM elements
var highlightBtn = document.getElementById("highlightBtn");
var box = document.getElementById("box");

// Step 2: Add click event
highlightBtn.addEventListener("click", function () {

  // Write your logic here
  // Add or remove "highlight" class on box
  box.classList.toggle("highlight")

});
