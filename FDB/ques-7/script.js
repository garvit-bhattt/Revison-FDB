// Step 1: Get required DOM elements
var nameInput = document.getElementById("nameInput");
var submitBtn = document.getElementById("submitBtn");

// Step 2: Add event listener on input
nameInput.addEventListener("input", function () {

  // Write your logic here
  if (nameInput.value.length==0){
    submitBtn.setAttribute("disabled","true")
  }else{
    submitBtn.removeAttribute("disabled")
  }
});
