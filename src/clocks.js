export const dateItem = document.createElement('div')
dateItem.classList.add('header__clocksDate')

export const dayWeek = document.createElement('div')
dayWeek.classList.add('header__clocksDay')

export const dateClock = document.createElement('div')
dayWeek.classList.add('header__clocksItem')

 
export  function getDate () {
    window.setInterval(function () {
         let now = new Date();
         const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
         const days = now.getDay()
         dayWeek.innerText = dayOfWeek[days]
         dateClock.innerText = now.toLocaleTimeString()
       }, 0)
     }
   
     getDate()