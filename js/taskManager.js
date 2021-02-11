
class TaskManager {
    constructor(currentId = 0) {
        //Check if there is anything saved in local storage. If there is set this.tasks array to the contents in local storage
        let savedTaskList = localStorage.getItem("savedList")
        if(savedTaskList) {
            this.tasks = JSON.parse(savedTaskList);
            this.load(this.tasks);
            this.currentId = this.tasks.length;
        }
        //If nothing is stored in local storage, set this.tasks array to an empty array.
        else {
            this.tasks = [];
            this.currentId = currentId;
        }
        
    }
    addTask(name, description, assignedTo, dueDate, status="TODO") {
        this.name = name;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        this.tasks.push({
                            id: this.currentId, 
                            name: this.name, 
                            description: this.description, 
                            assignedTo: this.assignedTo, 
                            dueDate: this.dueDate, 
                            status: this.status
                        });
        
    }
    render() {
        let newHtml = 
            `<li id="${ this.tasks[this.currentId]["id"] }" class="task-card">
                <div>${ this.tasks[this.currentId]["name"] }</div>
                <div>${ this.tasks[this.currentId]["description"] }</div>
                <div>${ this.tasks[this.currentId]["assignedTo"] }</div>
                <div>${ this.tasks[this.currentId]["dueDate"] }</div>
                <div class="status">${ this.tasks[this.currentId]["status"] }</div>
                <div><button class="done-button">Mark Done</button></div>
            </li>`;
            listContainer.insertAdjacentHTML("beforeend", newHtml);
            this.currentId++;
    }
    save() {
        localStorage.setItem("savedList", JSON.stringify(this.tasks));
        //console.log("This is from line 50 taskManager.js: " + JSON.stringify(this.tasks))
    }
    load(thisDotTasks) {
        for(let i = 0; i < thisDotTasks.length; i++) {
            let newHtml = 
            `<li id="${ thisDotTasks[i]["id"] }" class="task-card">
                <div>${ thisDotTasks[i]["name"] }</div>
                <div>${ thisDotTasks[i]["description"] }</div>
                <div>${ thisDotTasks[i]["assignedTo"] }</div>
                <div>${ thisDotTasks[i]["dueDate"] }</div>
                <div class="status">${ thisDotTasks[i]["status"] }</div>
                <div><button class="done-button">Mark Done</button></div>
            </li>`;
            listContainer.insertAdjacentHTML("beforeend", newHtml);
        }
    }
    
}