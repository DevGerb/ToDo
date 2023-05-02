// Define UI elements
const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const taskList = document.querySelector('#taskList');

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

// Add task function
function addTask(e) {
    e.preventDefault();
    // Get input value
    const newTask = taskInput.value;
    // Create new list item
    const listItem = document.createElement('li');
    // Create checkbox input
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'taskCheckbox';
    // Add checkbox input to list item
    listItem.appendChild(checkbox);
    // Add text node with input value
    listItem.appendChild(document.createTextNode(newTask));
    // Add list item to list
    taskList.appendChild(listItem);
    // Clear input
    taskInput.value = '';

    // Add event listener to checkbox
    checkbox.addEventListener('change', function () {
        // If checkbox is checked, strike through text
        if (this.checked) {
            listItem.style.textDecoration = 'line-through';
        } else {
            listItem.style.textDecoration = 'none';
        }
    });

    // Add event listener to checkbox
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // call a function to reorder the list items
            reorderListItems();
        });
    });

}

