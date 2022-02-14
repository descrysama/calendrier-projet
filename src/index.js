import dayjs from 'dayjs'
import Mydays from './daysclass';



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
let getCalendar = document.getElementById('calendar');
let detailDay = document.getElementById('day-detail');


getInputValue.setAttribute('value', currentDate.$y + '-' + 0+(currentDate.$M+1) + '-' + currentDate.$D)
    let daysArray = []
    let newDate = dayjs(getInputValue.value)
    daysArray.push(getDaysInMonth(newDate.$M, newDate.$y))
    daysArray[0].map(day => {
        let thedate = dayjs(day);
        let createDiv = document.createElement('div');
        let createtextContent = document.createElement('p');
        createtextContent.setAttribute('onclick', 'showDetails()');
        createDiv.setAttribute('class', 'box');
        createtextContent.textContent = thedate.$D;
        createDiv.appendChild(createtextContent)
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
