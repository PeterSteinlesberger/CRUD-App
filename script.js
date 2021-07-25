let numbers = [];
let names = [];


loadLocalStorage();


function addData() {
let newName = document.getElementById('inputName').value;
let newNumber = document.getElementById('inputNumber').value;
names.push(newName);
numbers.push(newNumber);
showData();
save();
}

function showData() {
    document.getElementById('data-cont').innerHTML = '';
    for (let i = 0; i < names.length; i++) {
    document.getElementById('data-cont').innerHTML += `
    <div id="${i}" class="data">
    <div>
    <div>Name: ${names[i]}</div>
    <div>Number: ${numbers[i]}</div>
    </div>
    <button class="button" onclick="deleteData(${i})">Delete</button>
    </div>`;
    }
}

function deleteData(idOfContainer) {
 let  i = idOfContainer;
names.splice(i, 1);
numbers.splice(i, 1);
showData();
save();
}

function save() {
    let namesAsText = JSON.stringify(names);
    localStorage.setItem('names', namesAsText);
    let numbersAsText = JSON.stringify(numbers);
    localStorage.setItem('numbers', numbersAsText);
}

function loadLocalStorage() {
    let loadedNamesAsText = localStorage.getItem('names');
    let loadedNumbersAsText = localStorage.getItem('numbers');
    
    if(loadedNamesAsText && loadedNumbersAsText) {
        names = JSON.parse(loadedNamesAsText);
        numbers = JSON.parse(loadedNumbersAsText);
        showData();
    }
}  