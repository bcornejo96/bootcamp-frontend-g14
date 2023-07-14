const taskInput = document.querySelector('.task_input')
const taskAdd = document.querySelector('.task_add')
const taskList = document.querySelector('.task_list')

taskAdd.addEventListener('click', function(event){



    if(taskInput.value === ''){
        alert('Elcampo es requerido')
        return
    } 

    /*const button = document.createElement('button')
    button.innerText = 'hola'
    document.body.appendChild(button)*/

    const li = document.createElement('li')

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    li.appendChild(checkbox)

    let span = document.createElement('span')
    span.innerText = taskInput.value
    li.appendChild(span)

    let button = document.createElement('button')
    button.innerText = 'borrar'
    li.appendChild(button)




    taskList.appendChild(li)

})

