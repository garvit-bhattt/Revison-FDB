// Step 1: Get required DOM elements
var termsCheckbox = document.getElementById("termsCheckbox");
var continueBtn = document.getElementById("continueBtn");

// Step 2: Add change event listener
termsCheckbox.addEventListener("change", function () {

  if (termsCheckbox.checked) {
    continueBtn.removeAttribute("disabled");
  } else {
    continueBtn.setAttribute("disabled", "true");
  }

});
