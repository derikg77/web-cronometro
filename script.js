const appendSecond = document.getElementById('seconds');
const appendMinutes = document.getElementById('minutes');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let seconds = 0;
let minutes = 0;
let interval;

start.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
stop.addEventListener('click', () => {
  clearInterval(interval);
});
reset.addEventListener('click', () => {
  minutes = '00';
  seconds = '00';
  appendMinutes.innerHTML = minutes;
  appendSecond.innerHTML = seconds;
});

function startTimer() {
  minutes++;
  if (minutes <= 9) {
    appendMinutes.innerHTML = '0' + minutes;
  }
  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
  if (minutes > 99) {
    seconds++;
    appendSecond.innerHTML = '0' + seconds;
    minutes = 0;
    appendMinutes.innerHTML = '0' + 0;
  }
  if (seconds > 9) {
    appendSecond.innerHTML = seconds;
  }
}
