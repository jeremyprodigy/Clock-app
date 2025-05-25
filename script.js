let clock = document.getElementById('clock');

function showClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let newHours = hours < 10 ? `0${hours}` : hours;
    let newMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let newSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${newHours} : ${newMinutes} : ${newSeconds}`;
}

setInterval(() => {
    clock.textContent = showClock();
}, 1000)















































