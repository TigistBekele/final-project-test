
// function createTaskHtml(name, description, assignedTo, dueDate, status) {
//     const html = 
//                     `<li id="" class="task-card">
//                         <div>${ name }</div>
//                         <div>${ description }</div>
//                         <div>${ assignedTo }</div>
//                         <div>${ dueDate }</div>
//                         <div>${ status }</div>
//                     </li>`;
//         return html;
// }

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
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
        this.currentId++;
    }
    render() {
        let newHtml = 
                        `<li id="${ this.tasks[this.currentId - 1]["id"] }" class="task-card">
                            <div>${ this.tasks[this.currentId - 1]["name"] }</div>
                            <div>${ this.tasks[this.currentId - 1]["description"] }</div>
                            <div>${ this.tasks[this.currentId - 1]["assignedTo"] }</div>
                            <div>${ this.tasks[this.currentId - 1]["dueDate"] }</div>
                            <div>${ this.tasks[this.currentId - 1]["status"] }</div>
                            <div>${ this.tasks[this.currentId - 1]["name"] }</div>
                            <div><button class="done-button">Mark Done</button></div>
                        </li>`;
            listContainer.insertAdjacentHTML("beforeend", newHtml);
    }
    save() {
        localStorage.setItem("savedList", JSON.stringify(this.tasks));
    }
    
}