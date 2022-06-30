import {tasks} from "./createAndFormatingTask"
import {updateLocal} from "./createAndFormatingTask"
import {getAmount} from "./getAmountTasks"
import {changeColor} from "./changeTaskColor"

export let dragItem = null
export let dragTaskItem  = null

 export function dragAndDrop() {

    const todoCards = document.querySelectorAll(".todoBlock")
    const todoWrappers = document.querySelectorAll(".todoColumns__container")

    for (let i = 0; i < todoCards.length; i++) {
        const todo = todoCards[i]
        const dragTask = tasks[i]

        todo.addEventListener('dragstart', () => {
            setTimeout(() => {
                dragItem = todo
                dragTaskItem = dragTask
                todo.style.display = 'none'
            }, 0)
        })

        todo.addEventListener('dragend', () => {
            setTimeout(() => {
                todo.style.display = 'flex'
                dragTaskItem = null
                dragItem = null
            }, 0)
        })

        for (let j = 0; j < todoWrappers.length; j++) {
            const wrapper = todoWrappers[j]

            wrapper.addEventListener('dragover', evt => evt.preventDefault())

            wrapper.addEventListener('dragenter', function () {
                this.style.boxShadow = "3px -4px 10px 2px rgba(34, 60, 80, 0.2)"
            })

            wrapper.addEventListener('dragleave', function () {
                this.style.boxShadow = "none"
            })

            wrapper.addEventListener('drop', function () {
                this.style.boxShadow = "none"
                this.append(dragItem)
                if (this == document.querySelector('.todoColumns__containerSecond')) {
                    dragTaskItem.progress = true
                    dragTaskItem.done = false
                    updateLocal()
                } else if (this == document.querySelector('.todoColumns__containerThird')) {
                    dragTaskItem.done = true
                    dragTaskItem.progress = false
                    updateLocal()
                } else {
                    dragTaskItem.progress = false
                    dragTaskItem.done = false
                    updateLocal()
                }
                changeColor()
                getAmount()
            })
      
        }

    }
  
}

dragAndDrop()
