function addTask(columnId) {
    const input = document.getElementById(`${columnId}-input`);
    const taskText = input.value.trim(); // Trim whitespace from the input text
   

    if(taskText ==""){
        return;
    }
    const taskElement = createTaskElement(taskText);
    document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
    input.value = ""; // Clear the input field after adding the task
}

function createTaskElement(taskText) {
    const taskElement = document.createElement("div");
    taskElement.textContent = taskText;
    taskElement.classList.add("card");
    return taskElement;

}