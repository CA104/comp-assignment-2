// All tasks array
const taskList = [
    { date: '2019-04-25', task: 'Prototype assignment' },
    { date: '2019-04-19', task: 'Mini css framework assignment' },
    { date: '2019-04-27', task: 'Comp assignment'}
]

const printAllTasks = () => {
    // Maps each row from the all tasks array to some html
    let currentTasks = taskList.map(newTask => console.log(newTask));
}

const addNewTask = () => {
    // Get the date
    let date = document.getElementById('date').value;
    // Get the task name
    let tasks = document.getElementById('tasks').value;
    // Create an object, push to the local data set (array)
    const newTask = taskList.push({date: '2019-04-17', task: 'Waterframe design'})
    // Store the entire list of tasks to localstorage
    localStorage.setItem('tasks', JSON.stringify(taskList));

    // Reprint the list of current tasks
    printAllTasks();

    // Clear out what's there in "new"
    // Re-focus the input so I can add more
}


printAllTasks();