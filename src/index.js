import {dateItem, dayWeek, dateClock} from "./clocks"
import { getDate } from "./clocks"

getDate()

const headerClocks = document.querySelector('.header__clocks')

dateItem.innerText = new Date().toLocaleDateString()


headerClocks.append(dateItem)
headerClocks.append(dayWeek)
headerClocks.append(dateClock)