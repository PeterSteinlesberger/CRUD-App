let numbers = [];
let names = [];

function addData() {
let newName = document.getElementById('inputName').value;
let newNumber = document.getElementById('inputNumber').value;
names.push(newName);
numbers.push(newNumber);
showData();
}

function showData() {
    document.getElementById('data-cont').innerHTML = '';
    for (let i = 0; i < names.length; i++) {
    document.getElementById('data-cont').innerHTML += `
    <div class="data">
    <div>Name: ${names[i]}</div>
    <div>Number: ${numbers[i]}</div>
    </div>`;
    }
}
