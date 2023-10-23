// DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Add a task to the list
function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText}
        <button class="delete">Delete</button>
        <button class="complete">Complete</button>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";

    // Attach event listeners for delete and complete buttons
    const deleteButton = listItem.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    const completeButton = listItem.querySelector(".complete");
    completeButton.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });
}

// Add task on button click or Enter key press
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
