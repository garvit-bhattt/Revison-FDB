// Step 1: Get required DOM elements
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");

// Step 2: Add event listener to button
addBtn.addEventListener("click", function () {

  // Step 3: Read input value
  var taskValue = taskInput.value;
  if (taskValue !==""){
    let listchild= document.createElement("li");
    listchild.innerText=taskValue;
    taskList.appendChild(listchild);
    taskInput.value=""
     
  }

  // Step 4: Write your logic here
  // - check empty input
  // - create <li>
  // - set text
  // - append to list
  // - clear input

});
