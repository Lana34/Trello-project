
const todosWrapper1 = document.querySelector(".todoColumns__containerFirst")
const todosWrapper2 = document.querySelector(".todoColumns__containerSecond")
const todosWrapper3 = document.querySelector(".todoColumns__containerThird")

export function getAmount() {
    const cardsTodo = todosWrapper1.querySelectorAll(".todoBlock")
    const cardsInProgress = todosWrapper2.querySelectorAll(".todoBlock")
    const cardsDone = todosWrapper3.querySelectorAll(".todoBlock")

    const spanTodo = document.querySelector('.todo')
    spanTodo.innerText = cardsTodo.length

    const spanInProgress = document.querySelector('.inProgress')
    spanInProgress.innerText = cardsInProgress.length

    const spanDone = document.querySelector('.done')
    spanDone.innerText = cardsDone.length

}

getAmount()