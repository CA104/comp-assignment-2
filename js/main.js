// All tasks array
const taskList = [
    {  },
]

const printAllTasks = () => {
    // Maps each row from the all tasks array to some html
}

const addNewTask = () => {
    // Get the date
    let date = document.getElementById('date').value;
    // Get the task name
    let task = document.getElementById('tasks').value;
    // Create an object, push to the local data set (array)

    // Store the entire list of tasks to localstorage
    localStorage.setItem('tasks', JSON.stringify(taskList));

    // Reprint the list of current tasks
    printAllTasks();

    // Clear out what's there in "new"
    // Re-focus the input so I can add more
}


printAllTasks();