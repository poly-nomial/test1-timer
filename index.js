const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  return (seconds) => {
    const timer = setInterval(function () {
      let m = Math.floor(seconds / 60);
      let s = seconds % 60;
      let h = Math.floor(m / 60);
      m = m % 60;
      if (seconds < 0) {
        clearInterval(timer);
      } else {
        timerEl.textContent = `${h >= 10 ? h : "0" + h}:${
          m >= 10 ? m : "0" + m
        }:${s >= 10 ? s : "0" + s}`;
      }
      seconds = seconds - 1;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  const regNumbers = RegExp(/\d*/);
  inputEl.value = inputEl.value.match(regNumbers);
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
