document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const tasksList = document.getElementById('tasks');

  // Step 2: Add an event listener to the form
  form.addEventListener('submit', function(event) {
    // Step 3: Prevent the default form submission behavior
    event.preventDefault();

    // Step 4: Get the value of the input field
    const taskDescription = input.value;

    // Step 5: Create a new list item element
    const newTask = document.createElement('li');

    // Set the text content of the new list item
    newTask.textContent = taskDescription;

    // Step 6: Append the new list item to the tasks list
    tasksList.appendChild(newTask);

    // Clear the input field after adding the task
    input.value = '';
  });
});
