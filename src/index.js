import { create } from 'canvas-confetti';
import dayjs from 'dayjs'
import Mydays from './daysclass';


//Fonction permetant de recuperer le nombre de jour en parcourant le mois entier avec un while.
function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
}

//declaration des variables DOM plus la date actuelle.
let currentDate = dayjs();
let getInputValue = document.getElementById('input-date');
let getCalendar = document.getElementById('calendar');
let detailDay = document.getElementById('day-detail');
let getFormAdd = document.getElementById('form-add');




//Section permetant d'afficher le calendrier au chargement de la page.
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
// onclick permetant de savoir sur lequel des boutons on a cliqués.
let getDaysbutton = document.querySelectorAll('.daysbutton');
    for (let i = 0; i < getDaysbutton.length; i++) {
        let newDates = currentDate;
        newDates = dayjs(getInputValue.value)
        getDaysbutton[i].onclick = () => {
            let successSection = document.getElementById('set-success');
            if (successSection.hasChildNodes() == true) {
                let selectIt = document.getElementById("alert")
                successSection.removeChild(selectIt)
            }
            detailDay.innerHTML = '';
            let getEvent = sessionStorage.getItem(getDaysbutton[i].textContent+'/'+(newDates.$M+1)+'/'+newDates.$y);
            let day = new Mydays(getDaysbutton[i].textContent, (newDates.$M+1), newDates.$y, getEvent);
            let createDiv = document.createElement('div');
            let createh3 = document.createElement('h3');
            let createLi = document.createElement('li');
            createh3.textContent = day.day + '/' + day.month + '/' + day.year;
            createh3.setAttribute('id','current-selected-date');
            createLi.textContent = day.event;
            createLi.setAttribute('id', 'event');
            createDiv.appendChild(createh3);
            createDiv.appendChild(createLi);
            detailDay.appendChild(createDiv);
        }
    }
//Event listener pour le changement de l'input, au changement il recharge les jours
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
    // section permetant de supprimer la notification de succes au clique d'une autre case de jour.
        getDaysbutton[i].onclick = () => {
            let successSection = document.getElementById('set-success');
            if (successSection.hasChildNodes() == true) {
                let selectIt = document.getElementById("alert")
                successSection.removeChild(selectIt)
            }
            detailDay.innerHTML = '';
            let getEvent = sessionStorage.getItem(getDaysbutton[i].textContent+'/'+(newDates.$M+1)+'/'+newDates.$y);
            let day = new Mydays(getDaysbutton[i].textContent, (newDates.$M+1), newDates.$y, getEvent);
            let createDiv = document.createElement('div');
            let createh3 = document.createElement('h3');
            let createLi = document.createElement('li');
            createh3.textContent = day.day + '/' + day.month + '/' + day.year;
            createh3.setAttribute('id','current-selected-date');
            createLi.textContent = day.event;
            createLi.setAttribute('id', 'event');
            createDiv.appendChild(createh3);
            createDiv.appendChild(createLi);
            detailDay.appendChild(createDiv);
            
        }
    }
})
//Event listener du form pour ajouter un evenement a l'objet jour. ( supprime la notif si il y en a une)
getFormAdd.addEventListener('submit', (e) =>{
    let successSection = document.getElementById('set-success');
            if (successSection.hasChildNodes() == true) {
                let selectIt = document.getElementById("alert")
                successSection.removeChild(selectIt)
            }
    e.preventDefault()
    let selectSelectedDate = document.getElementById('current-selected-date');
    let selectEventInput = document.getElementById('event-input');
    sessionStorage.setItem(selectSelectedDate.textContent, selectEventInput.value)
    document.getElementById('event').textContent = selectEventInput.value;
    let createAlert = document.createElement('div');
    createAlert.setAttribute('class', 'alert alert-success');
    createAlert.setAttribute('id', 'alert');
    createAlert.textContent = 'Evenement Ajouté avec succes.';
    document.getElementById('set-success').appendChild(createAlert)
    selectEventInput.value = '';
    document.getElementById('all-events').innerHTML = ''
    allEvents()
})

//Section qui permet de lire le sessionStorage et d'afficher le contenu dans la section "Tout les évenements".
const allEvents = () => {
    let allEvents = document.getElementById('all-events');
    let values = [];
    let keys = Object.keys(sessionStorage);
    let i = keys.length;
    while (i--) {
        values.push(sessionStorage.getItem(keys[i]));
    }
    keys.reverse()

    for (i = 0; i < keys.length; i++) {
        let createEvent = document.createElement('div');
        createEvent.setAttribute('class', 'paper');
        createEvent.textContent = keys[i] + ' : ' + values[i];
        allEvents.appendChild(createEvent)
    }
}

document.getElementById('remover').onclick = () => {
    sessionStorage.clear();
    document.getElementById('all-events').innerHTML = '';
}

allEvents()