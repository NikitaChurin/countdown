let box = document.querySelectorAll('.box');
let text = document.querySelector('.text');
let startBtn = document.querySelector('.start-btn')

function startButton() {
    progressAndBlockBtn();
    writeText();
    addClassName(0);
    replacingText();
}

function writeText() {
    text.textContent = '--PROGRESS START--';
    let startNumber = 0;
    let endNumber = 0;
    let maxNumber = 16;

    box.forEach((item) => {
        item.addEventListener('animationstart', function () {
            startNumber++;
            textContent(startNumber, 'START');
            text.scrollTop += 100;
        });
        item.addEventListener('animationend', function () {
            endNumber++;
            textContent(endNumber, 'END');
            text.scrollTop += 100;
            if (endNumber === maxNumber) {
                text.textContent += '\n--PROGRESS END--';
                text.scrollTop += 100;
                setTimeout(() => {
                    alert('succes');
                    if (alert) {
                        location.reload();
                    }
                }, 1000);
            }
            // addClassName(endNumber);
        });
    });
};

function replacingText() {
    let key = 1;
    const intervalId = setInterval(() => {
        addClassName(key);
        key++;
        if (key === maxNumber) {
            clearInterval(intervalId);
        }
    }, 500);
};

function textContent(number, startAndEnd) {
    text.textContent += `\nCell ${number} Animation ${startAndEnd}`;
};

function addClassName(name) {
    box[name].className += ' boxRotate'
};

function progressAndBlockBtn() {
    startBtn.textContent = 'in progress';
    startBtn.disabled = true;
};
