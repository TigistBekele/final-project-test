//Get form inputs and save to variables
const newTaskNameInput = document.getElementById("task-name");
const newTaskDescription = document.getElementById("description");
const newTaskAssignedTo = document.getElementById("assigned-to");
const newTaskDueDate = document.getElementById("due-date");
const newTaskStatus = document.getElementById("status");
const submitButton = document.getElementById("submit-button");
const listContainer = document.getElementById("list-container");
const clearAll = document.getElementById("clear-all");

//Create a new instance of our TaskManager class
const newTaskList = new TaskManager();

//Check if submit button has been clicked
submitButton.addEventListener("click", () => {
    //get form input values from index.html
    let taskName = newTaskNameInput.value;
    let description = newTaskDescription.value;
    let assignedTo = newTaskAssignedTo.value;
    let dueDate = newTaskDueDate.value;
    
    //add a new task to our tasks array with the values from the user input in the form
    newTaskList.addTask(taskName, description, assignedTo, dueDate)
    newTaskList.render();
    newTaskList.save();
    
    //clear the form input fields
    clearFormFields();
})

listContainer.addEventListener("click", (e) => {
    let selected = e.target;
    if(selected.classList.contains("done-button")) {
        let parentTask = selected.parentElement.parentElement;
        //Get the html of the task so we can change the html displayed on the webpage
        let statusHtml = parentTask.getElementsByClassName("status")[0];
        let taskId = parseInt(parentTask.attributes.id.value);
        console.log("This is from line 62: " + parentTask);
        //Update newTaskList.tasks array with the Done STATUS
        newTaskList['tasks'][taskId]['status'] = 'DONE';
        statusHtml.innerHTML = 'DONE';
        //Save the new status to local storage
        newTaskList.save()
    }
})

//Clear local storage
clearAll.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})

//clear the form input fields after new task is submitted
function clearFormFields() {
    newTaskNameInput.value = ""; 
    newTaskDescription.value = "";  
    newTaskAssignedTo.value = "";  
    newTaskDueDate.value = "";  
    newTaskStatus.value = "";  
}