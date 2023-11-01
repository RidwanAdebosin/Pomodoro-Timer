const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

const updateTimer = () => {
  //converting timeLeft to minutes
  let minutes = Math.floor(timeLeft / 60);
  //converting timeLeft to seconds
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
};
const startTimer = () => {
  //create an interval that update the timer every one second
  interval = setInterval(() => {
    //decrese time
    timeLeft--;
    //update the time
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time is up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
};

btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
