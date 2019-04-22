// All tasks array
let taskList = []

const printAllTasks = () => {

    // Maps each row from the all tasks array to some html
    document.getElementById('upcoming').innerHTML = taskList.map(newTask => 
        `<li class= "animated bounceIn tasks-listed">
        ${newTask.date} <br> ${newTask.task} 
        <br> ${newTask.course}</li>`).join('');
}

const addNewTask = () => {

    // // Get the date from UI
    let date = document.getElementById('date').value;
    // // Get the task name from UI
    let tasks = document.getElementById('tasks').value;
    // // Get the course selection from UI
    let course = document.getElementById('course').value;

    // check if there's anything in local storage
    var items = localStorage.getItem("tasks")
    if (items == "" || items == undefined) {
        console.log("No tasks available")
    }
    else {
        // convert whatever was in local storage back into an array so you can work with it
        taskList = JSON.parse(items)
    }

    // Create an object, push to the local data set (array)
    taskList.push({ "date":date, "task":tasks, "course":course });
    
    // Store the entire list of tasks to localstorage
    localStorage.setItem('tasks', JSON.stringify(taskList));

    // Reprint the list of current tasks
    printAllTasks();

    // Clear out what's there in "new"
    document.getElementById('tasks').value = " ";
}

addNewTask();