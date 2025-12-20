// Step 1: Get required DOM elements
var taskInput = document.getElementById("taskInput");
var addBtn = document.getElementById("addBtn");
var taskList = document.getElementById("taskList");

// Step 2: Add event listener to button
addBtn.addEventListener("click", function () {

  let taskValue = taskInput.value;

  if (taskValue !== "") {
    let listchild = document.createElement("li");
    listchild.innerText = taskValue;

    //  delete task on click
    listchild.addEventListener("click", function () {
      listchild.remove();
    });

    taskList.appendChild(listchild);
    taskInput.value = "";
  }
});
