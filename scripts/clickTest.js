let testing = false;
const bigButton = document.getElementById("bigButton");
let clickCount = 0;
const countDisplay = document.getElementById("countDisplay");
const countList = document.getElementById("countList");

function startTest() {
    clickCount ++;
    countDisplay.innerText = clickCount.toString();
    if(testing) return;
    testing = true;
    bigButton.classList.add("big-button-full");
    setTimeout('endTest()', 1000);
}

function endTest() {
    let newCount = document.createElement("li");
    newCount.textContent = clickCount.toString();
    countList.appendChild(newCount);
    clickCount = 0;
    bigButton.classList.remove("big-button-full");
    testing = false;
}