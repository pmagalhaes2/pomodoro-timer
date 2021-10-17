feather.replace()

let minutes = 25;
let seconds = 00;
let counterInterval = undefined;

const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

updateCounterEl();

function updateCounterEl() {
    minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

function startCounter() {

    if (counterInterval) return;
    counterInterval = setInterval(() => {
        if (seconds === 0) {
            if (minutes === 0) {
                destroyInterval();
            } else {
                seconds = 59;
                --minutes;
            }
        } else {
            --seconds;
        }
        updateCounterEl();
    }, 1000);
}

function pauseCounter() {
    destroyInterval();
}

function destroyInterval() {
    clearInterval(counterInterval);
    counterInterval = undefined;
}

function resetCounter() {
    destroyInterval();
    minutes = 25;
    seconds = 00;
    updateCounterEl();
}