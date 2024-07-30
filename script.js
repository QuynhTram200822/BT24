// setTimeout

let countdownTimeout;
let remainingSeconds;

function startCountdown() {
  clearTimeout(countdownTimeout);

  const secondsInput = document.getElementById('seconds');
  remainingSeconds = parseInt(secondsInput.value, 10);

  if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }

  function tick() {
    if (remainingSeconds <= 0) {
      alert("Finish");
      return;
    }

    remainingSeconds--;
    updateDisplay();
    countdownTimeout = setTimeout(tick, 1000);
  }

  tick();
}

function updateDisplay() {
  const timerDisplay = document.getElementById('timerDisplay');
  timerDisplay.textContent = `Time remaining: ${remainingSeconds} seconds`;
}

function clearCountdown() {
  clearTimeout(countdownTimeout);
  document.getElementById('timerDisplay').textContent = "Time remaining: 0 seconds";
  alert("Finish");
}

// setInterval

function clearAnimation() {

  const textAnimation = document.getElementById('text');

  textAnimation.classList.add('no-animation');


}
