// All tasks array
let taskList = [
    { date: '2019-04-25', task: 'Prototype assignment' },
    { date: '2019-04-19', task: 'Mini css framework assignment' },
    { date: '2019-04-27', task: 'Comp assignment'}
]

const printAllTasks = () => {

    // Maps each row from the all tasks array to some html
    document.getElementById('upcoming').innerHTML = taskList.map(newTask => `<li>${newTask.date} <br> ${newTask.task}</li>`).join('');
}

const addNewTask = () => {

    // // Get the date from UI
    let date = document.getElementById('date').value;
    // // Get the task name from UI
    let tasks = document.getElementById('tasks').value;
   
    alert(`date: ${date}, task: ${tasks}`)

    // check if there are things already in local storage
    var items = localStorage.getItem("tasks")
    if (items == null || items == undefined) {
        console.log("there is nothing saved in the task list, moving on with life")
    }
    else {
        // convert whatever was in local storage back into an array so you can work with it
        taskList = JSON.parse(items)
    }

    // Create an object, push to the local data set (array)
    taskList.push({ "date":date, "task":tasks});
    
    // Store the entire list of tasks to localstorage
    localStorage.setItem('tasks', JSON.stringify(taskList));

    // Reprint the list of current tasks
    printAllTasks();

    document.getElementById('upcoming').innerHTML = html
    // Clear out what's there in "new"
    // Re-focus the input so I can add more
}

addNewTask();