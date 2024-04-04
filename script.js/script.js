// Retrieve stored tasks from local storage
var storedTasks = localStorage.getItem("tasks");
var tasks = storedTasks ? JSON.parse(storedTasks) : [];

// Render tasks in the list
function renderTasks() {
  var ul = document.getElementById("taskList");
  ul.innerHTML = "";

  tasks.forEach(function(task, index) {
    var li = document.createElement("li");
    li.classList.add("task-item");
    if (task.completed) {
      li.classList.add("completed");
    }

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function() {
      toggleTaskCompletion(index);
    });

    var taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task.text;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      deleteTask(index);
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}

// Add a new task
function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value.trim();

  if (taskText !== "") {
    var task = {
      text: taskText,
      completed: false
    };

    tasks.push(task);
    renderTasks();
    saveTasksToLocalStorage();

    input.value = "";
  } else {
    alert("Please enter a task!");
  }
}

// Toggle task completion status
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  saveTasksToLocalStorage();
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
  saveTasksToLocalStorage();
}

// Save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial rendering of tasks
renderTasks();