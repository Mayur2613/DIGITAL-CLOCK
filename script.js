function ClockUpdate() {
    const clockElement = document.getElementById('clock');
    const mainElement = document.getElementById('main');

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    let main = "";
    if (now.getHours() < 12) {
        main = "Good Morning";
    } else if (now.getHours() < 16) {
        main = "Good Afternoon";
    } else if (now.getHours() < 19) {
        main = "Good Evening";
    } else {
        main = "Good Night ";
    }
    mainElement.textContent = main;
}

setInterval(ClockUpdate, 1000);
ClockUpdate();


