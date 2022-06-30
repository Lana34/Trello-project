export function changeColor() {
    
    const todosWrapper1 = document.querySelector(".todoColumns__containerFirst")
    const todosWrapper2 = document.querySelector(".todoColumns__containerSecond")
    const todosWrapper3 = document.querySelector(".todoColumns__containerThird")
    
    let elems1 = todosWrapper1.children
    for (let elem of elems1) {
        elem.classList.remove("todoBlock_colorGrey")
        elem.classList.remove("todoBlock_colorBlue")
        elem.classList.add("todoBlock_colorPirple")
    }

    let elems2 = todosWrapper2.children
    for (let elem of elems2) {
        elem.classList.remove("todoBlock_colorPirple")
        elem.classList.remove("todoBlock_colorBlue")
        elem.classList.add("todoBlock_colorGrey")
    }

    let elems3 = todosWrapper3.children
    for (let elem of elems3) {
        elem.classList.remove("todoBlock_colorPirple")
        elem.classList.remove("todoBlock_colorGrey")
        elem.classList.add("todoBlock_colorBlue")
    }
}

changeColor()