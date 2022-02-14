import { create } from 'canvas-confetti';
import dayjs from 'dayjs'


function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

let currentDate = dayjs();
let getInputValue = document.getElementById('input-date');
let getCalendar = document.getElementById('calendar')
getInputValue.setAttribute('value', currentDate.$y + '-' + 0+(currentDate.$M+1) + '-' + currentDate.$D)


let daysArray = []
    let newDate = dayjs(getInputValue.value)
    daysArray.push(getDaysInMonth(newDate.$M, newDate.$y))
    daysArray[0].map(day => {
        let thedate = dayjs(day);
        let createDiv = document.createElement('div');
        let createAelement = document.createElement('a')
        let createtextContent = document.createElement('p');
        createDiv.setAttribute('class', 'box');
        createAelement.setAttribute('onclick', 'showDetails()');
        createtextContent.textContent = thedate.$D;
        createAelement.appendChild(createtextContent)
        createDiv.appendChild(createAelement)
        getCalendar.appendChild(createDiv)
})



getInputValue.addEventListener('change', ()=> {
    getCalendar.innerHTML = ''
    let daysArray = []
    let newDate = dayjs(getInputValue.value)
    daysArray.push(getDaysInMonth(newDate.$M, newDate.$y))
    daysArray[0].map(day => {
        let thedate = dayjs(day);
        let createDiv = document.createElement('div');
        let createtextContent = document.createElement('p');
        createDiv.setAttribute('class', 'box');
        createtextContent.textContent = thedate.$D;
        createDiv.appendChild(createtextContent)
        getCalendar.appendChild(createDiv)
    })
})
