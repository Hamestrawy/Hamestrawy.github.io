let testing = false;
const bigButton = document.getElementById("bigButton");
let clickCount = 0;
const countDisplay = document.getElementById("countDisplay");
const countList = document.getElementById("countList");
const seconds = document.getElementById('seconds');

function startTest() {
    clickCount ++;
    countDisplay.innerText = clickCount.toString();
    if(testing) return;
    testing = true;
    bigButton.classList.add("big-button-full");
    setTimeout('endTest()', parseInt(seconds.value) * 1000);
}

function endTest() {
    let newCount = document.createElement("li");
    newCount.textContent = clickCount.toString() + ' times in ' + seconds.value + ' seconds';
    countList.appendChild(newCount);
    clickCount = 0;
    bigButton.classList.remove("big-button-full");
    testing = false;
}

function checkSeconds() {
    let value = seconds.value.replace(/0-9/g, '').trim()
    if (value === '') {
        value = '1'
    }
    value = Math.max(1, parseInt(value))
    seconds.value = value.toString()
}