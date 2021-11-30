let upperLimit;
let guessNumber;
let counter;

function startGame() {
    upperLimit = upperLimitInput.value;
    counter = counterInput.value;
    guessNumber = Math.round(Math.random()*upperLimit);
    let activeDiv = document.getElementsByClassName('active')[0];
    activeDiv.classList.remove('active');
    activeDiv.nextElementSibling.classList.add('active');
}

function guess() {
    let inputNumber = guessNumberInput.value;
    if (guessNumber === inputNumber) {
        setTimeout(function () {
            createPopup("Du hast gewonnen! Die richtige Zahl war " + guessNumber, true);
        }, 500);
    } else {
        counter--;
        if (counter > 0) {
            if (guessNumber > inputNumber) {
                textOutput.innerHTML = "Die zu erratende Nummer ist größer als " + inputNumber;
            } else {
                textOutput.innerHTML = "Die zu erratende Nummer ist kleiner als " + inputNumber;
            }
        } else {
            setTimeout(function () {
                createPopup("Leider verloren, die zu erratende Zahl war " + guessNumber, true);
            }, 500);
        }
    }
}