// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const tasksList = document.getElementById('tasks-list');
const completedTasksList = document.getElementById('completed-tasks-list');
const noTasks = document.getElementById('no-tasks');
const updateTasksBtn = document.getElementById('update-tasks-btn');

// Add event listeners to buttons
addTaskBtn.addEventListener('click', addTask);
updateTasksBtn.addEventListener('click', updateTasks);

// Function to add a task to the list
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.classList.add(
      'bg-white',
      'p-3',
      'rounded-md',
      'flex',
      'items-center',
      'justify-between',
      'shadow-md',
      'my-2'
    );

    // Create and add checkbox to the task item
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mr-2');

    // Create and add the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create the trash can icon
    const trashIcon = document.createElement('i');
    trashIcon.className = 'fas fa-trash-alt text-custom-red cursor-pointer ml-2';

    // Add event listener for removing the task
    trashIcon.addEventListener('click', removeTask);

    // Append all elements to the list item
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(trashIcon);

    // Append the list item to the task list
    tasksList.appendChild(li);
    taskInput.value = '';
    noTasks.style.display = 'none';
  }
}

// Function to remove a task from the list
function removeTask(e) {
  e.target.parentElement.remove();
  if (tasksList.childElementCount === 0) {
    noTasks.style.display = 'block';
  }
}

// Function to update tasks, moving completed tasks to the completed task list
function updateTasks() {
  const tasks = tasksList.children;
  for (let i = tasks.length - 1; i >= 0; i--) {
    const task = tasks[i];
    if (task.firstChild.checked) {
      task.firstChild.disabled = true;
      task.classList.add('completed');
      completedTasksList.appendChild(task);
    }
  }
  if (tasksList.childElementCount === 0) {
    noTasks.style.display = 'block';
  }
}

