document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const noTasksMessage = document.getElementById("noTasksMessage");

    // Update the placeholder "No Tasks Added"
    function updateTaskCount() {
        const taskCount = taskList.children.length;
        if (taskCount === 0) {
            noTasksMessage.textContent = "No Tasks Added";
        } else {
            noTasksMessage.textContent = `Total Tasks: ${taskCount}`;
        }
    }

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Mark task as completed on click
        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Add delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.addEventListener("click", () => {
            li.remove();
            updateTaskCount(); // Update count when task is removed
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";

        // Update task count when a task is added
        updateTaskCount();
    }

    // Event Listeners
    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") addTask();
    });

    // Initialize task count on page load
    updateTaskCount();
});

