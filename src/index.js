import dayjs from 'dayjs'

let laDate = dayjs();
let inputContainer = document.getElementById('input-container');
let createInput = document.createElement('input');
createInput.setAttribute('type', 'date');
createInput.setAttribute('value', laDate.$y +'-'+ 0+(laDate.$M+1) +'-'+laDate.$D);
inputContainer.appendChild(createInput);


