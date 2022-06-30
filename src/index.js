
import { dateItem, dayWeek, dateClock } from "./clocks"
import { getDate } from "./clocks"

import { Task } from "./createAndFormatingTask"
import { addTaskBtn } from "./createAndFormatingTask"
import { tasks } from "./createAndFormatingTask"
import { updateLocal } from "./createAndFormatingTask"
import { fillHtmlList } from "./createAndFormatingTask"
import { fillTodocolumns } from "./createAndFormatingTask"
import{changeColor} from "./changeTaskColor"
import { getAmount } from "./getAmountTasks"
import {addTaskBtn} from "./createAndFormatingTask"

import {deleteAllBtn} from "./madalDeleteAll"
import {modalWindow} from "./madalDeleteAll"
import { dragItem } from "./dragAndDrop"
import {dragtaskItem} from "./dragAndDrop"
import {dragAndDrop} from "./dragAndDrop"

getDate()

const headerClocks = document.querySelector('.header__clocks')

dateItem.innerText = new Date().toLocaleDateString()


headerClocks.append(dateItem)
headerClocks.append(dayWeek)
headerClocks.append(dateClock)


updateLocal()

fillTodocolumns()

dragAndDrop()

getAmount()
