let courseList = [ // list of courses and their info
    {id: 113, name: 'Applied Web Programming', code: `wddm_113`, instructor: `Rocco Panacci`, url: `/pages/web-programming.html`},
    {id: 115, name: 'Tools and Workflow for the Web', code: `wddm_115`, instructor: `Jenelle Chen`, url: `/pages/tools-workflow.html`},
    {id: 117, name: 'Web Design Plan & Prototyping', code: `wddm_117`, instructor: `Felice Forte`, url: `/pages/plan-prototyping.html`},
    {id: 116, name: 'Web Production Techniques', code: `wddm_116`, instructor: `Milorad Eftoski`, url: `/pages/production-techniques.html`},
    {id: 114, name: 'Applied Web Design', code: `wddm_114`, instructor: `Rocco Panacci`, url: `/pages/web-programming.html`}
    ]

const allCourses = [
    { courseId: 113, color: `rgb(163, 163, 225)` },
    { courseId: 115, color: `rgb(208, 152, 128` },
    { courseId: 117, color: `rgb(107, 206, 200)` },
    { courseId: 116, color: `rgb(173, 180, 95)` },
    { courseId: 114, color: `rgb(100, 140, 10)` },
  ];
 

const printAllCourses = () => { // function to print the enrolled courses list
    document.getElementById('enrolled-courses').innerHTML = courseList.map( enrolled =>
        `<li class="container"><a href="${enrolled.url}">${enrolled.name} - ${enrolled.code} <br>
        Instructor: ${enrolled.instructor}</li>`).join('');
}
    printAllCourses();


const printAllTasks = () => {
    
    document.getElementById('upcoming').innerHTML = taskList.map(newTask => // Maps each row from the all tasks array to some html
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