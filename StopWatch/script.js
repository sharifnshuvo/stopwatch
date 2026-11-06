let [hours, minutes, seconds] = [0,0,0];
let displaytime = document.getElementById("time-display");

let timer = null;

function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
        minutes = 0;
        hours++;
    }
    
    }

    let h = hours < 10 ? "0" + hours : hours;    
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;


    displaytime.innerHTML = h + ":" + m + ":" + s;
}

// Start Stopwatch
function watchStart() {

    if (timer !== null) {
        return;
    }

    timer = setInterval(stopwatch, 1000);
}


// Stop Stopwatch
function watchStop() {

    clearInterval(timer);

    timer = null;
}


// Reset Stopwatch
function watchReset() {

    clearInterval(timer);

    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    displaytime.innerHTML = "00:00:00";
}

document.getElementById("startBtn")
    .addEventListener("click", watchStart);

document.getElementById("stopBtn")
    .addEventListener("click", watchStop);

document.getElementById("resetBtn")
    .addEventListener("click", watchReset);