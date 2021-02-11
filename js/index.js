//Get form inputs and save to variables
const newTaskNameInput = document.getElementById("task-name");
const newTaskDescription = document.getElementById("description");
const newTaskAssignedTo = document.getElementById("assigned-to");
const newTaskDueDate = document.getElementById("due-date");
const newTaskStatus = document.getElementById("status");
const submitButton = document.getElementById("submit-button");
const listContainer = document.getElementById("list-container");

//Create a new instance of our TaskManager class
const newTaskList = new TaskManager();

let data = localStorage.getItem("savedList");
if(data) {
    newTaskList.tasks = JSON.parse(data);
    for(let i = 0; i < newTaskList.tasks.length; i++) {
        let newHtml = 
                        `<li id="${ i }" class="task-card">
                            <div>${ newTaskList.tasks[i]["name"] }</div>
                            <div>${ newTaskList.tasks[i]["description"] }</div>
                            <div>${ newTaskList.tasks[i]["assignedTo"] }</div>
                            <div>${ newTaskList.tasks[i]["dueDate"] }</div>
                            <div>${ newTaskList.tasks[i]["status"] }</div>
                            <div>${ newTaskList.tasks[i]["name"] }</div>
                            <div><button class="done-button">Mark Done</button></div>
                        </li>`;
            listContainer.insertAdjacentHTML("beforeend", newHtml);
    }
}
else {
    console.log("no data");
}


//Check if submit button has been clicked
submitButton.addEventListener("click", () => {
    //get form input values from index.html
    let taskName = newTaskNameInput.value;
    let description = newTaskDescription.value;
    let assignedTo = newTaskAssignedTo.value;
    let dueDate = newTaskDueDate.value;
    let status = newTaskStatus.value;
    
    //add a new task to our tasks array with the values from the user input in the form
    newTaskList.addTask(taskName, description, assignedTo, dueDate)
    newTaskList.render();
    newTaskList.save();
    console.log(newTaskList);
    
    //clear the form input fields
    clearFormFields();
})

listContainer.addEventListener("click", (e) => {
    let selected = e.target;
    if(selected.classList.contains("done-button")) {
        let parentTask = selected.parentElement.parentElement;
        let taskId = parseInt(parentTask.attributes.id.value);
        newTaskList['tasks'][taskId]['status'] = 'DONE';
        parentTask.remove();
        newTaskList.render();
        newTaskList.save()
    }
})

//clear the form input fields after new task is submitted
function clearFormFields() {
    newTaskNameInput.value = ""; 
    newTaskDescription.value = "";  
    newTaskAssignedTo.value = "";  
    newTaskDueDate.value = "";  
    newTaskStatus.value = "";  
}