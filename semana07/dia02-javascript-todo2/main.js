const taskInput = document.querySelector('.task__input')
const taskList = document.querySelector('task__list')

const tasks = []

taskInput.addEventListener('keypress', function(event){
//Logica de la app
//console.log(event)
if (event.key === 'Enter'){
    const value = event.target.value
    taskInput.push(value)
}


})