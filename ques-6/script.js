// Step 1: Get required DOM elements
var toggleBtn = document.getElementById("toggleBtn");
var profileImg = document.getElementById("profileImg");

// Step 2: Add click event listener
toggleBtn.addEventListener("click", function () {

  // Write your logic here
  profileImg.classList.toggle("border")

});
