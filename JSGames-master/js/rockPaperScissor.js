let bestOf;
let userPoints = 0;
let pcPoints = 0;

function startGame() {
    bestOf = document.getElementsByTagName('select')[0].value;
    let activeDiv = document.getElementsByClassName('active')[0];
    activeDiv.classList.remove('active');
    activeDiv.nextElementSibling.classList.add('active');
}



function play(userChoice) {
    let pcChoice = Math.ceil(Math.random() * 3);

    setSrc(userChoiceDisplay, userChoice);
    setSrc(pcChoiceDisplay, pcChoice);

    compare(userChoice, pcChoice);

    if (bestOf === 0) {
        setTimeout(function () {
            if (userPoints > pcPoints) {
                createPopup("Du hast gewonnen!", true);
            } else {
                createPopup("Leider verloren", true);
            }
        }, 500);
    }
}

function setSrc(item, choice) {
    switch (choice) {
        case 1:
            item.setAttribute('src', "img/rockPaperScissors/rock.png");
            break;
        case 2:
            item.setAttribute('src', "img/rockPaperScissors/paper.png");
            break;
        case 3:
            item.setAttribute('src', "img/rockPaperScissors/scissors.png");
            break;
    }
}

function compare(userChoice, pcChoice) {
    if (userChoice === pcChoice){
        userChoiceDisplay.style.filter = "drop-shadow(0 0 40px rgb(255, 255, 255))";
        pcChoiceDisplay.style.filter = "drop-shadow(0 0 40px rgb(255, 255, 255))";
        textOutput.innerHTML = "Draw! Nothing happens.";
        return;
    } else if (userChoice === 1) {
        if (pcChoice === 2) {
            pcGetPoint();
        } else {
            userGetPoint();
        }
    } else if (userChoice === 2) {
        if (pcChoice === 3) {
            pcGetPoint();
        } else {
            userGetPoint();
        }
    } else {
        if (pcChoice === 1) {
            pcGetPoint();
        } else {
            userGetPoint();
        }
    }
}

function userGetPoint() {
    userPoints++;
    textOutput.innerHTML = "User won this round."
    userPointDisplay.innerHTML = userPoints;
    userChoiceDisplay.style.filter = "drop-shadow(0 0 40px rgb(60, 152, 44))";
    pcChoiceDisplay.style.filter = "drop-shadow(0 0 40px rgb(255, 0, 0))";
    bestOf--;
}
function pcGetPoint() {
    pcPoints++;
    textOutput.innerHTML = "PC won this round."
    pcPointDisplay.innerHTML = pcPoints;
    userChoiceDisplay.style.filter = "drop-shadow(0 0 40px rgb(255, 0, 0))";
    pcChoiceDisplay.style.filter = "drop-shadow(0 0 40px rgb(60, 152, 44))";
    bestOf--;
}