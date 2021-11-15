let fallingspeed = 9.81;
let angle;
let power;
let throwingDistance;
let monsterDistance;
let x = 0, y = 0, time = 0;

function startGame () {
    gameMenu.classList.remove('active');
    inGame.classList.add('active');
    setMonsterposition();
}

function setMonsterposition() {
    monsterDistance = Math.round(Math.random() * 1000);
    monster.style.left = monsterDistance + "px";
    monsterDistanceBox.innerHTML = "The monster is " + monsterDistance + "m from you away.";
}

function selectWorld (world) {
    startGame();
    switch (world) {
        case "earth":
            fallingspeed = 9.81;
            document.getElementsByTagName('main')[0].style.backgroundImage = "url(\"../img/monsterHunter/earth.jpg\")";
            break;
        case "moon":
            fallingspeed = 1.62;
            document.getElementsByTagName('main')[0].style.backgroundImage = "url(\"../img/monsterHunter/moon.jpg\")";
            break;
        case "mars":
            fallingspeed = 3.69;
            document.getElementsByTagName('main')[0].style.backgroundImage = "url(\"../img/monsterHunter/mars.jpg\")";
            break;
        case "jupiter":
            fallingspeed = 24.79;
            document.getElementsByTagName('main')[0].style.backgroundImage = "url(\"../img/monsterHunter/jupiter.jpg\")";
            break;
    }
}

shoot.addEventListener('click', function () {
    angle = 0; power = 0; throwingDistance = 0; x = 0; y = 0; time = 0;
    angle = angleInput.value * (Math.PI / 180);
    power = powerInput.value;
    throwingDistance = Math.round(((power * power) * Math.sin(2 * angle)) / fallingspeed);
    startAnimation();
    checkIfHit();
});

function checkIfHit() {
    if (Math.abs(monsterDistance - throwingDistance) <= 20) {
        alertBox.innerHTML = "Good job! You did hit the monster!";
    } else {
        alertBox.innerHTML = "Woops. You missed the monster by " + Math.abs(monsterDistance - throwingDistance);
    }
}


function startAnimation() {
    let timer = setInterval(function () {
        y = -0.5 * fallingspeed * Math.pow(time, 2) + power * Math.sin(angle) * time;
        x = power * Math.cos(angle) * time;
        if (y < 0) {
            clearInterval(timer);
        }
        bomb.style.bottom = Math.round(y) + "px";
        bomb.style.left = Math.round(x) + "px";
        time += 0.1;
    }, 10);
}
