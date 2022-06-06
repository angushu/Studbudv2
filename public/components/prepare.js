// The structure of the prepare page is primarily based off the content learnt throughout the couse

// constant variables for getting elements from HTML
const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var dateDateInput = document.getElementById("dueDateInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityInput = document.getElementById("priorityInput");

// variables for the coveyquadrant
var quad_1 = document.getElementById("quad-1");
var quad_2 = document.getElementById("quad-2");
var quad_3 = document.getElementById("quad-3");
var quad_4 = document.getElementById("quad-4");

// variable for the tasklist
var tasklist = document.getElementById("tasklist");

// variable for the modal pop up
var modal_content = document.getElementById("modal-content");
var modal = document.getElementById("task-modal");

// on click, collate all input values 

button.addEventListener("click", function (event) {
  event.preventDefault();
  let task = taskInput.value;
  let dueDate = dueDateInput.value;
  let estimatedTime = estimatedTimeInput.value;
  let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
  addTask(task, dueDate, estimatedTime, priorityRating,false);
});

var taskListArray = [];

// add all input values into an array item 

function addTask(
  taskDescription,
  dueDate,
  estimatedTime,
  priorityRating,
  completionStatus
) {
  let d = new Date();
  let dateCreated = d.getFullYear();
  let task = {
    id: Date.now(),
    taskDescription,
    dueDate,
    dateCreated,
    estimatedTime,
    priorityRating,
    completionStatus,
  };
  taskListArray.push(task);
  console.log(taskListArray);
  console.log("pixxa");
  renderTask(task);

  // create a variable for key
  // addiung a task to local storage

  var key = task.id.toString();
  console.log(key);
  // creating a value
  localStorage.setItem(key, JSON.stringify(task));
}

// create a function to make the list appear

function renderTask(task) {
  // create the HTML elements
  let item = document.createElement("div");
  item.setAttribute("data-id", task.id);
  item.setAttribute("class", "covey-task");
  item.innerHTML =
    "<p>" +
    task.taskDescription +
    "</p>" +
    "<p>" ;

  // switch cases based on....
  console.log(task.priorityRating);
  console.log(task.estimatedTime);

    // Extra Task DOM elements for deleting a task
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete Task");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);

    // Extra Task DOM elements for Viewing a Task
    let viewButton = document.createElement("button");
    let viewButtonText = document.createTextNode("View Task");
    viewButton.setAttribute("id","modalBtn");
    viewButton.appendChild(viewButtonText);
    item.appendChild(viewButton);
    
      // On the click of the view button, open up the modal pop up,
      // This will display task values

  viewButton.addEventListener("click", function (event) {
    console.log("viewButton Clicked");
    console.log(taskListArray);
    modal.style.display = "block";
    for(i = 0; i<taskListArray.length; i++){
      if (taskListArray[i].id ==  viewButton.parentNode.getAttribute("data-id")){
          let task_description = document.createElement("div");
          task_description.setAttribute("data-id", task.id);
          task_description.innerHTML =
          "<h2> Task Description </h2>"+
          "<p>  Task Name: " +
          task.taskDescription +
          "</p>" +
          "<p> Due Date: " +
          task.dueDate +
          "</p>" +
          "<p>" +
          "<p> Task Length(mins): " +
          task.estimatedTime +
          "</p>" +
          "<p> Priority Rating: " +
          task.priorityRating +
          "</p>" ;

          modal_content.appendChild(task_description);
         var span = document.getElementById("close");

    //  On click of the span, close the modal box and clear any input information
          span.onclick = function() {
          modal.style.display = "none";
          task_description.remove();

        }
      }
    }
    
  });
  
    //  On click of the delete button, delete the task from the covey quadrant it is in and 
    // remove it from the TaskListArray
  delButton.addEventListener("click", function (event){
    let id = event.target.parentElement.getAttribute("data-id");
    // console.log(id);
    console.log("delButton Clicked");
    let index = taskListArray.findIndex((task) => task.id === Number(id));
    // console.log(index);
    removeItemFromArray(taskListArray, index);
    console.log(taskListArray);
    item.remove();

    // Clear the input form
    form.reset();
  });

  // function for removing a task from the TaskListArray
  function removeItemFromArray(arr, index) {
    if (index >1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  // Pushing a task into a specific quadrant based off of priority level and the estimated time 
  // to complete it
  
  switch (task.priorityRating) {
    case "Low":
      if(task.estimatedTime<=30){
      quad_4.appendChild(item);
      console.log("short simple task");
      }
      else if (task.estimatedTime>=30) {
        quad_3.appendChild(item);
        console.log("longer simple task");
      }
      break;
  
    case "High":
      if(task.estimatedTime<30){
        quad_2.appendChild(item);
        console.log("short hard task");
        }
        else if(task.estimatedTime>=30) {
          quad_1.appendChild(item);
          console.log("longer hard task");
      break;
  }

  }