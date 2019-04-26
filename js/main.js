let courseList = [ // list of courses and their info
    {id: 113, name: 'Applied Web Programming', code: `wddm_113`, instructor: `Rocco Panacci`, grade: 80},
    {id: 115, name: 'Tools and Workflow for the Web', code: `wddm_115`, instructor: `Jenelle Chen`, grade: 80},
    {id: 117, name: 'Web Design Plan & Prototyping', code: `wddm_117`, instructor: `Felice Forte`, grade: 80},
    {id: 116, name: 'Web Production Techniques', code: `wddm_116`, instructor: `Milorad Eftoski`, grade: 80},
    {id: 114, name: 'Applied Web Design', code: `wddm_114`, instructor: `Rocco Panacci`, grade: 80}
    ]

const printAllCourses = () => { // function to print the enrolled courses list
    document.getElementById('enrolled-courses').innerHTML = courseList.map( enrolled =>
        `<li class="input-boxes">${enrolled.name} - ${enrolled.code} <br>
        Instructor: ${enrolled.instructor}</li>`).join('');
}
    printAllCourses();


const printAllTasks = () => { // Maps each row from the all tasks array to some html
    document.getElementById('upcoming').innerHTML = taskList.map(newTask => 
        `<li class= "animated bounceIn tasks-listed">
        ${newTask.date} <br> ${newTask.task} 
        <br> ${newTask.course}</li>`).join('');
}

const taskForm = document.getElementById('newTask');
const addNewTask = () => {

    // prevent the page from refreshing
    event.preventDefault();
    
    let date = document.getElementById('date').value;  // Get the date from UI
    
    let tasks = document.getElementById('tasks').value;  // Get the task name from UI
    
    let course = document.getElementById('course').value;  // Get the course selection from UI
    
    taskList.push({ "date":date, "task":tasks, "course":course }); // Create an object, push to the local data set (array)
    
    taskForm.reset(); // Clear out what's there in "new"
    setToLocalStorage();
    printAllTasks();
}
taskForm.addEventListener('submit', addNewTask);


const getFromLocalStorage = () => {

    var items = localStorage.getItem("tasks") // check if there's anything in local storage
    if (items == "" || items == undefined) {
        console.log("No tasks available")
        return [];
    }
    else {
        return JSON.parse(items) // convert whatever was in local storage back into an array so you can work with it
    }
}


const setToLocalStorage = () => {

    localStorage.setItem('tasks', JSON.stringify(taskList)); // Store the entire list of tasks to localstorage

   // printAllTasks(); // Reprint the list of current tasks

}
let taskList = getFromLocalStorage(); // All tasks array

printAllTasks();



// deal with login
const logout = () => {
    window.location.href="login.html"
}


const studentProfile = () => { // displays student information
    event.preventDefault();
    document.getElementById('course-content').innerHTML = `<h3><strong>Carlos Arellano</strong></h3> <br> 
            <p>Program: Web Design & Develpment</p> <br>
            <p>Student #: N01062419</p> <br>
            <p>Email Address: carlos_arellano@hotmail.ca</p> <br>
            <a href="https://humber.ca/myhumber/">MyHumber.ca</a>`
}

const displayContent = () => { // displays current grades 
    event.preventDefault();
    document.getElementById('course-content').innerHTML = courseList.map( enrolled => 
        `<h3 class="grades animated bounceIn">${enrolled.name}</h3> <br> <p>${enrolled.grade}%</p>`).join('')
}