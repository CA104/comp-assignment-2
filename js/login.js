let students = [
    {studentUsername: 'n01062419', studentPassword: 'carlos123'},
    {studentUsername: 'n02847541', studentPassword: 'mazen456'},
    {studentUsername: 'n03750924', studentPassword: 'nicole789'},
    {studentUsername: 'n04872047', studentPassword: 'rocco101'}
];

let login = ( studentsLogins ) => {
    students.forEach( studentsLogins => {if (( studentsLogins.studentUsername ===
        document.getElementById('username').value) && (studentsLogins.studentPassword 
            === document.getElementById('password').value)); {
                window.location.href="index.html"
            }
    });
}