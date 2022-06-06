// To display different time features, switch between containers on the click of a button

document.getElementById("feature-toggle").addEventListener("click",toggleFeature);

function toggleFeature() {
    var stopwatch_div = document.getElementById("stopwatch-container");
    var pomodoro_div = document.getElementById("pomodoro-container");
    if (stopwatch_div.style.display === "block") {
        stopwatch_div.style.display = "none";
        pomodoro_div.style.display = "block";
    }else {
        stopwatch_div.style.display = "block";
        pomodoro_div.style.display = "none";
    }
}

/* Stopwatch created with inspiration from:
https://www.youtube.com/watch?v=49f1cjZWRJA&ab_channel=TylerPotts */

// Creating Global Variables for each of the stopwatch elements

const elapsedTime = document.getElementById('watch-face');
var start_stopwatch = document.getElementById("start-stopwatch");
var stop_stopwatch = document.getElementById("stop-stopwatch");
var reset_stopwatch = document.getElementById("reset-stopwatch");
let seconds = 0;
let interval = null;

// Event Listeners for each of the stopwatch buttons

start_stopwatch.addEventListener('click', start);
stop_stopwatch.addEventListener('click', stop);
reset_stopwatch.addEventListener('click', reset);

// Timer Function for ticking up seconds and the display of time
// Update the timer

function timer() {
    seconds ++;

    // Formatting our Time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds- (hrs * 3600)) / 60);
    let secs = seconds % 60;
    
    if (secs < 10) secs = "0" + secs;
    if (mins < 10) mins = "0" + mins;

    // Adding an extra zero in front of time if it is less than 10
    if (hrs < 10) hrs = "0" + hrs;

    elapsedTime.innerText = `${hrs}:${mins}:${secs}`;

}

    // Start ticking up in seconds
function start () {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);
}
    // Stop counting
function stop () {
    clearInterval(interval);
    interval = null;
}

    // Stop counting and reset back to zero
function reset () {
    stop();
    seconds = 0;
    elapsedTime.innerText = "00:00:00"
}

//Pomodoro Timer
/* The pomodoro timer was created with inspiration from Mateusz Rybczonec
The link to this timer can be found here:
https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/
On top of his existing timer, I added some buttons for extra funcitonality */

// Global Variables
var start_pomodoro = document.getElementById("start-pomodoro");
var pause_pomodoro = document.getElementById("pause-pomodoro");
var reset_pomodoro = document.getElementById("reset-pomodoro");

start_pomodoro .addEventListener('click', startTimer);
pause_pomodoro.addEventListener('click', pauseTimer);
reset_pomodoro.addEventListener('click', resetTimer);

// Setting up Arc length
const fullArclength = 283;

// Setting up colours for each of the phases of the pomodoro timer.
// This consists of 2 study phases a short break and a long break

const studyTime1 = 2700
const shortBreak = 2400
const studyTime2 = 1800
const longBreak = 600

const COLOR_CODES = {
  phase_1: {
    color: "blue",
    threshold: studyTime1
  },
  phase_2: {
    color: "pink",
    threshold: shortBreak
  },
  phase_3: {
    color: "blue",
    threshold: studyTime2
  },
  phase_4: {
    color: "orange",
    threshold: longBreak
  }
};

// Setting up the overall time limit of the pomodoro timer as well as the interval counter

const TIME_LIMIT = 4500;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.phase_1.color;

// Setting up the container for the pomodoro timer
// as the elements inside of the pomodoro timer for the circular clockface
document.getElementById("pomodoro").innerHTML = `
<div class="base-pomodoro">
  <svg class="base-pomodoro__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-pomodoro__circle">
      <circle class="base-pomodoro__time-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-pomodoro-time-remaining"
        stroke-dasharray="283"
        class="base-pomodoro__time-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-pomodoro-label" class="pomodoro-timer__label">${formatTime(
    timeLeft
  )}
  </span>
</div>
`;

// On time elapse of the pomodoro timer, reset the timer
function onTimesUp() {
  resetTimer();
  setRemainingPathColor(timeLeft);
}

// On click of the start button, start the timer and start counting the time passed
function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-pomodoro-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}


// On click of the pause button, pause the timer
function pauseTimer(){
  clearInterval(timerInterval);
  setRemainingPathColor(timeLeft);
}

// On click of the reset button, reset the timer back to the beggining interval
function resetTimer(){
    clearInterval(timerInterval);
    timePassed = 0;
    timeLeft = TIME_LIMIT;
    document.getElementById("base-pomodoro-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);
}

// The formatTime function will count the elapsed time

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

// This function will change the colour of the circle, depending on the phase it has passed

function setRemainingPathColor(timeLeft) {
  const { phase_1, phase_2, phase_3, phase_4 } = COLOR_CODES;
  if (timeLeft <= phase_1.threshold) {
    document
      .getElementById("base-pomodoro-time-remaining")
      .classList.remove(phase_4.color);
    document
      .getElementById("base-pomodoro-time-remaining")
      .classList.add(phase_1.color);
  } else if (timeLeft <= phase_2.threshold) {
    document
      .getElementById("base-pomodoro-time-remaining")
      .classList.remove(phase_1.color);
    document
      .getElementById("base-pomodoro-time-remaining")
      .classList.add(phase_2.color);
  } else if (timeLeft <= phase_3.threshold) {
      document
      .getElementById("base-pomodoro-time-remaining")
      .classList.remove(phase_2.color);
    document
      .getElementById("base-pomodoro-time-remaining")
      .classList.add(phase_3.color);
  }
  else if (timeLeft <= phase_4.threshold) {
    document
    .getElementById("base-pomodoro-time-remaining")
    .classList.remove(phase_3.color);
  document
    .getElementById("base-pomodoro-time-remaining")
    .classList.add(phase_4.color);
}
}

  
// This function calculate the time left and convert it into a fraction that maps onto the arc length

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * fullArclength
  ).toFixed(0)} 283`;
  document
    .getElementById("base-pomodoro-time-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}