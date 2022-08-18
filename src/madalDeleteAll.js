import { tasks } from "./createAndFormatingTask"
import { getAmount } from "./getAmountTasks"
import { updateLocal } from "./createAndFormatingTask"
import { fillTodocolumns } from "./createAndFormatingTask"


const createPopUp = () => {
    return `
            <p class="popUp__warning">Are you sure you want to delete all tasks?</p>
            <div class ="popUp__deleteAllBlock">
            <button class = "popUp__sureBtn">Yes</button>
            <button class = "popUp__noBtn">No</button>
            </div>
    `
}

export const deleteAllBtn = document.querySelector('.todoColumns__delete')
export const modalWrapper = document.querySelector('.popUp__wrapper')
export const modalWindow = document.querySelector('.popUp')



deleteAllBtn.addEventListener('click', () => {
        modalWrapper.style.display ='flex'
        modalWindow.style.display = 'flex'
        modalWindow.innerHTML = createPopUp()


const sureBtn = document.querySelector('.popUp__sureBtn')
const noBtn = document.querySelector('.popUp__noBtn')


sureBtn.addEventListener('click', () =>{
    tasks.length = 0
    updateLocal()
    fillTodocolumns()
    modalWrapper.style.display ='none'
    getAmount()
})

noBtn.addEventListener('click', () => {
    modalWrapper.style.display ='none'
})

})

modalWrapper.addEventListener('click', (e) =>{
  if(!e.target.closest(".popUp")){
    modalWrapper.style.display ='none'
  } 
})