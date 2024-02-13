let box = document.querySelectorAll('.box');
let text = document.querySelector('.text');
let startBtn = document.querySelector('.start-btn')

function startButton() {
    startBtn.textContent = 'in progress';
    writeText();
    replacingText();
    textContent(1, 'START');
    addClassName(0);
    setTimeout(() => {
        alert('succes');
        if (alert) {
            location.reload();
        }
    }, 9500);
}

function writeText() {
    text.textContent = '--PROGRESS START--';
    let startNumber = 1;
    let endNumber = 0;

    const intervalIdStart = setInterval(() => {
        startNumber++;
        textContent(startNumber, 'START');
        text.scrollTop += 100;
        if (startNumber === 16) {
            clearInterval(intervalIdStart);
        }
    }, 500);
    const intervalIdEnd = setInterval(() => {
        endNumber++;
        textContent(endNumber, 'END');
        text.scrollTop += 100;
        if (endNumber === 16) {
            clearInterval(intervalIdEnd);
        }
    }, 500);

    setTimeout(() => {
        text.textContent += '\n--PROGRESS END--';
        text.scrollTop += 100;
    }, 9000);
}

function replacingText() {
    let key = 1;
    const intervalId = setInterval(() => {
        addClassName(key);
        key++;
        if (key === 16) {
            clearInterval(intervalId);
        }
    }, 500);
}

function textContent(number, startAndEnd) {
    text.textContent += `\nCell ${number} Animation ${startAndEnd}`;
}

function addClassName(name) {
    box[name].className += ' boxRotate'
}