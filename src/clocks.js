export const dateItem = document.createElement('div')
dateItem.classList.add('header__clocksDate')

export const dayWeek = document.createElement('div')
dayWeek.classList.add('header__clocksDay')

export const dateClock = document.createElement('div')
dayWeek.classList.add('header__clocksItem')

const headerClocks = document.querySelector('.header__clocks')
 
export  function getDate () {
    window.setInterval(function () {
         let now = new Date();
         const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
         const days = now.getDay()
         dayWeek.innerText = dayOfWeek[days]
         dateClock.innerText = now.toLocaleTimeString()
         dateItem.innerText = new Date().toLocaleDateString()
headerClocks.append(dateItem)
headerClocks.append(dayWeek)
headerClocks.append(dateClock)
       }, 0)
     }
   
     getDate()