let timerID = null;
let timerRunning = false;

function stopclock()
{
    if(timerRunning)
        clearTimeout(timerID)
    timerRunning = false;
}

function startclock()
{
    stopclock();
    showtime();
}

function showtime()
{
    let clock = document.querySelector("#zegar");
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeValue = "" + ((hours < 10) ? "0" : "") + hours;
    timeValue  += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue  += ((seconds < 10) ? ":0" : ":") + seconds;
    clock.innerHTML = timeValue;
    timerID = setTimeout("showtime()",1000);
    timerRunning = true;
}

startclock();