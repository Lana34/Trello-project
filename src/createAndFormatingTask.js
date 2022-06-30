

import { changeColor } from "./changeTaskColor"
import { getAmount } from "./getAmountTasks"

const todosWrapper1 = document.querySelector(".todoColumns__containerFirst")
const todosWrapper2 = document.querySelector(".todoColumns__containerSecond")
const todosWrapper3 = document.querySelector(".todoColumns__containerThird")

export const addTaskBtn = document.querySelector(".todoColumns__add")

export let tasks
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))


export const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

updateLocal()


export function Task(title, description, user) {
    this.title = title
    this.description = description
    this.user = user
    this.time = new Date().toLocaleDateString() 
    this.progress = false
    this.done = false

}


const createTemplate = () => {
    return `
        <div class="todoItem">
            <textarea class="title" cols = "30" rows = "1" placeholder="Title"></textarea>
            <textarea class="description" rows = "5" placeholder="Description"></textarea>
            <div class ="buttonsBlock">
            <select class ="userBlock">
            <option class ="user1"></option>
            <option  class ="user2"></option>
            <option  class ="user3"></option>
            </select>
            <button class = "cancel__button">Cancel</button>
            <button class = "submit__button">Submit</button>
            </div>
        </div>
    `
}

export const fillHtmlList = () => {
    todosWrapper1.innerHTML = createTemplate()

    const listItem1 = document.querySelector('.user1')
    const listItem2 = document.querySelector('.user2')
    const listItem3 = document.querySelector('.user3')

    fetch('http://localhost:3000/user/1').then(data => data.json()).then(data => listItem1.innerText = data.name)
    fetch('http://localhost:3000/user/2').then(data => data.json()).then(data => listItem2.innerText = data.name)
    fetch('http://localhost:3000/user/3').then(data => data.json()).then(data => listItem3.innerText = data.name)

}


const pushTodo = (el, index) => {
   
    const delTask = document.createElement('button')
    delTask.classList.add('delete__button')
    delTask.innerText = 'Delete'

    const editTask = document.createElement('button')
    editTask.classList.add('edit__button')
    editTask.innerText = 'Edit'

    const title = document.createElement('p')
    title.classList.add('title')
    title.innerText = "Title: " + el.title

    const description = document.createElement('p')
    description.classList.add('description')
    description.innerText = "Description: " + el.description

    const user = document.createElement('p')
    user.classList.add('user')
    user.innerText = "User: " + el.user

    const time = document.createElement('p')
    time.classList.add('date')
    time.innerText = el.time

    let todoBlock = document.createElement('div')
    todoBlock.classList.add('todoBlock')
    todoBlock.draggable = true

    let btnBlock = document.createElement('div')
    btnBlock.classList.add('buttons')
    let todoBlock__item = document.createElement('div')
    todoBlock__item.classList.add('todoBlock__item')

    todoBlock.append(btnBlock, title, description, todoBlock__item)
    btnBlock.append(editTask, delTask)
    todoBlock__item.append(user, time)

    if(el.progress !== true && el.done !== true){
        todosWrapper1.append(todoBlock)
    }else if(el.progress === true){
        todosWrapper2.append(todoBlock)
    }else{
        todosWrapper3.append(todoBlock)
    }

    delTask.addEventListener('click', () => {
        deleteTask(index)
    })

    editTask.addEventListener('click', () => {
        changeTask(el, index)
    })

}


export const fillTodocolumns = () => {
    todosWrapper1.innerHTML = ""
    todosWrapper2.innerHTML = ""
    todosWrapper3.innerHTML = ""
    if (tasks.length > 0) {
        tasks.forEach((el, index) => {
            pushTodo(el, index)
        })
        changeColor()
        getAmount()
    }
}


addTaskBtn.addEventListener('click', () => {
    fillHtmlList()

    const okButton = document.querySelector(".submit__button")
    const titleArea = document.querySelector(".title")
    const descriptionArea = document.querySelector(".description")
    const cancelButton = document.querySelector(".cancel__button")
    const selectUser = document.querySelector(".userBlock")


    okButton.addEventListener('click', () => {
        if (titleArea.value && descriptionArea.value) {
            tasks.push(new Task(titleArea.value, descriptionArea.value, selectUser.value))
        }
        updateLocal()
        fillTodocolumns()
        titleArea.value = ''
        descriptionArea.value = ''
    })

    cancelButton.addEventListener('click', () => {
        fillTodocolumns()
    })

})

const deleteTask = (index) =>{
    tasks.splice(index,1)
    updateLocal()
    fillTodocolumns()
    getAmount()
}


