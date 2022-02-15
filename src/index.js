import { create } from 'canvas-confetti';
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
let getFormAdd = document.getElementById('form-add');





getInputValue.setAttribute('value', currentDate.$y + '-' + 0+(currentDate.$M+1) + '-' + currentDate.$D)
let daysArray = []
let newDate = dayjs(getInputValue.value)
daysArray.push(getDaysInMonth(newDate.$M, newDate.$y))
daysArray[0].map(day => {
    let thedate = dayjs(day);
    let createDiv = document.createElement('div');
    let createtextContent = document.createElement('p');
    createDiv.setAttribute('class', 'box');
    createtextContent.textContent = thedate.$D;
    createtextContent.setAttribute('class', 'daysbutton')
    createDiv.appendChild(createtextContent)
    getCalendar.appendChild(createDiv)
})

let getDaysbutton = document.querySelectorAll('.daysbutton');
    for (let i = 0; i < getDaysbutton.length; i++) {
            let newDates = currentDate;
            newDates = dayjs(getInputValue.value)
            getDaysbutton[i].onclick = () => {
                detailDay.innerHTML = '';
                let day = new Mydays(getDaysbutton[i].textContent, (newDates.$M+1), newDates.$y, 'aucun');
                let createDiv = document.createElement('div');
                let createh3 = document.createElement('h3');
                let createLi = document.createElement('li');
                createh3.textContent = day.day + '/' + day.month + '/' + day.year;
                createLi.textContent = day.event;
                createDiv.appendChild(createh3);
                createDiv.appendChild(createLi);
                detailDay.appendChild(createDiv);
        }
    }

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
        createtextContent.setAttribute('class', 'daysbutton')
        createDiv.appendChild(createtextContent)
        getCalendar.appendChild(createDiv)
    })
    let getDaysbutton = document.querySelectorAll('.daysbutton');
    for (let i = 0; i < getDaysbutton.length; i++) {
            let newDates = currentDate;
            newDates = dayjs(getInputValue.value)
            let day = new Mydays(getDaysbutton[i].textContent, (newDates.$M+1), newDates.$y, 'aucun');
            getDaysbutton[i].onclick = () => {
                detailDay.innerHTML = '';
                let createDiv = document.createElement('div');
                let createh3 = document.createElement('h3');
                let createLi = document.createElement('li');
                createh3.textContent = day.day + '/' + day.month + '/' + day.year;
                createLi.textContent = day.event;
                createDiv.appendChild(createh3);
                createDiv.appendChild(createLi);
                detailDay.appendChild(createDiv);
        }
    }
})

getFormAdd.addEventListener('submit', (e) =>{
    e.preventDefault()
    
})