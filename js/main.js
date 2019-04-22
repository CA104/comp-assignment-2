let taskList = [] // All tasks array

const printAllTasks = () => {
    
    document.getElementById('upcoming').innerHTML = taskList.map(newTask => // Maps each row from the all tasks array to some html
        `<li class= "animated bounceIn tasks-listed">
        ${newTask.date} <br> ${newTask.task} 
        <br> ${newTask.course}</li>`).join('');
}

const addNewTask = () => {

    
    let date = document.getElementById('date').value;  // Get the date from UI
    
    let tasks = document.getElementById('tasks').value;  // Get the task name from UI
    
    let course = document.getElementById('course').value;  // Get the course selection from UI

    
    var items = localStorage.getItem("tasks") // check if there's anything in local storage
    if (items == "" || items == undefined) {
        console.log("No tasks available")
    }
    else {
        taskList = JSON.parse(items) // convert whatever was in local storage back into an array so you can work with it
    }

    taskList.push({ "date":date, "task":tasks, "course":course }); // Create an object, push to the local data set (array)
    
    localStorage.setItem('tasks', JSON.stringify(taskList)); // Store the entire list of tasks to localstorage

    printAllTasks(); // Reprint the list of current tasks

    document.getElementById('tasks').value = " "; // Clear out what's there in "new"
}

addNewTask();