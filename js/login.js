/********** current users **********/
let students = [ // array of students with existing logins
    {studentUsername: 'n01062419', studentPassword: 'carlos123'},
    {studentUsername: 'n02847541', studentPassword: 'mazen456'},
    {studentUsername: 'n03750924', studentPassword: 'nicole789'},
    {studentUsername: 'n04872047', studentPassword: 'rocco101'}
];

/********** login validator **********/
let login = ( studentsLogins ) => { // fucntion to validate username and password
    students.forEach( studentsLogins => {if (( studentsLogins.studentUsername ===
        document.getElementById('username').value) && (studentsLogins.studentPassword 
            === document.getElementById('password').value)) {
                window.location.href="index.html"
            }
            // else // NOTE: issue with the alert popping on screen for each element when the username and/or password are incorrect or correct :(
            // alert('Wrong username or password')
            // return;
    });
}