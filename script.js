window.addEventListener('DOMContentLoaded', () => {
    let stopwatchInterval;
    let timerInterval;
  
    // Stopwatch
    const stopwatchDisplay = document.getElementById('stopwatch');
    const startStopwatchButton = document.getElementById('start-stopwatch');
    const stopStopwatchButton = document.getElementById('stop-stopwatch');
    const resetStopwatchButton = document.getElementById('reset-stopwatch');
  
    let stopwatchTime = 0;
  
    function updateStopwatch() {
      stopwatchTime++;
      const hours = Math.floor(stopwatchTime / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((stopwatchTime % 3600) / 60).toString().padStart(2, '0');
      const seconds = (stopwatchTime % 60).toString().padStart(2, '0');
      stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }
  
    startStopwatchButton.addEventListener('click', () => {
      stopwatchInterval = setInterval(updateStopwatch, 1000);
      startStopwatchButton.disabled = true;
      stopStopwatchButton.disabled = false;
    });
  
    stopStopwatchButton.addEventListener('click', () => {
      clearInterval(stopwatchInterval);
      startStopwatchButton.disabled = false;
      stopStopwatchButton.disabled = true;
    });
  
    resetStopwatchButton.addEventListener('click', () => {
      clearInterval(stopwatchInterval);
      stopwatchTime = 0;
      stopwatchDisplay.textContent = '00:00:00';
      startStopwatchButton.disabled = false;
      stopStopwatchButton.disabled = true;
    });
  
    // Timer
    const timerDisplay = document.getElementById('timer');
    const timerInput = document.getElementById('timer-input');
    const startTimerButton = document.getElementById('start-timer');
    const stopTimerButton = document.getElementById('stop-timer');
    const resetTimerButton = document.getElementById('reset-timer');
  
    let timerTime = 0;
  
    function updateTimer() {
      if (timerTime > 0) {
        timerTime--;
        const hours = Math.floor(timerTime / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((timerTime % 3600) / 60).toString().padStart(2, '0');
        const seconds = (timerTime % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
      } else {
        clearInterval(timerInterval);
        startTimerButton.disabled = false;
        stopTimerButton.disabled = true;
      }
    }
  
    startTimerButton.addEventListener('click', () => {
      const inputTime = parseInt(timerInput.value);
      if (isNaN(inputTime) || inputTime <= 0) {
        alert('Please enter a valid time in seconds');
        return;
      }
  
      timerTime = inputTime;
      timerInterval = setInterval(updateTimer, 1000);
      startTimerButton.disabled = true;
      stopTimerButton.disabled = false;
    });
  
    stopTimerButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      startTimerButton.disabled = false;
      stopTimerButton.disabled = true;
    });
  
    resetTimerButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerTime = 0;
      timerDisplay.textContent = '00:00:00';
      timerInput.value = '';
      startTimerButton.disabled = false;
      stopTimerButton.disabled = true;
    });
  });