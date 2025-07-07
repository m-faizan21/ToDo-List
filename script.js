
// let rightClickedCard =null;
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
    const element = document.createElement("div");
    element.textContent = taskText;
    element.classList.add("card");
    // element.setAttribute("draggable", "true");
    element.draggable = true; // Make the task element draggable
    element.addEventListener("dragstart", dragStart);
    element.addEventListener("dragend", dragEnd);
    element.addEventListener("contextmenu",(event)=>{
        event.preventDefault();
        // rightClickedCard = this;
        console.log(event.pageX, event.pageY );
        
        showContextMenu(event.pageX, event.pageY);
    })
    return element;

}

function dragStart() {
    this.classList.add("dragging");
 
    
}

function dragEnd() {
    this.classList.remove("dragging");
    
}

// Jab page poori tarah load ho jaaye, tab ye code chalega
document.addEventListener("DOMContentLoaded", function() {
    // Saare columns ke task area (jahan task cards rakhe jaate hain) ko select karo
    const columns = document.querySelectorAll(".tasks");
    // Har column ke liye 'dragover' event listener add karo
    columns.forEach((column) => {
        column.addEventListener("dragover", dragOver);
    });
});

function dragOver(event) {
    event.preventDefault();
    const draggedCard = document.querySelector(".dragging");
    this.appendChild(draggedCard); // Append the dragged card to the current column
}

const contextMenu = document.querySelector(".context-menu");
function showContextMenu(x, y) {
    contextMenu.style.display = "block";
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
}