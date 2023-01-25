let timer = document.getElementById("timer");
let number = parseInt(sessionStorage.getItem("number")) || 0;

let timerInterval = function () {
  timer.innerHTML = number++;
  sessionStorage.setItem("number", number);
};

setInterval(timerInterval, 1000);
