const students = [
    {username: 'n01062419', password: 'carlos123'},
    {username: 'n02847541', password: 'mazen456'},
    {username: 'n03750924', password: 'nicole789'},
]

const login = () => {
    if(
( ('carlos') == document.getElementById('username').value) && 
(document.getElementById('password').value == (123))) {
    window.location.href="index.html"
}
else
alert('Wrong username or password!')
}
