const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateTime() {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();

  hoursElement.textContent = String(currentHours).padStart(2, "0");
  minutesElement.textContent = String(currentMinutes).padStart(2, "0");
  secondsElement.textContent = String(currentSeconds).padStart(2, "0");
}

updateTime();

setInterval(updateTime, 1000);
