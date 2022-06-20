import {dateItem, dayWeek, dateClock} from "./clocks"
import { getDate } from "./clocks"

import {Task} from "./createAndFormatingTask"
import {addTaskBtn} from "./createAndFormatingTask"
import {tasks} from "./createAndFormatingTask"
import {updateLocal} from "./createAndFormatingTask"
import {fillHtmlList} from "./createAndFormatingTask"
import {fillTodocolumns} from "./createAndFormatingTask"


getDate()

const headerClocks = document.querySelector('.header__clocks')

dateItem.innerText = new Date().toLocaleDateString()


headerClocks.append(dateItem)
headerClocks.append(dayWeek)
headerClocks.append(dateClock)


!localStorage.tasks ? tasks= [] : tasks = JSON.parse(localStorage.getItem('tasks'))

updateLocal()


fillTodocolumns()


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
    })
    
    cancelButton.addEventListener('click', () => { 
        fillTodocolumns()
    })

})


// const w = document.querySelector(".todoBlock")
// w.setAttribute('draggable', 'true')