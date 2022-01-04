// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';



const input = document.querySelector("datetime-picker");
 const button = document.querySelector("[data-start]") ;
   const days = document.querySelector("[data-days]");
   const hours = document.querySelector("[data-hours]");
   const minutes = document.querySelector("[data-minutes]");
  const seconds = document.querySelector("[data-seconds]");



button.disabled = true;

let timerId = null;
let endDate = null;

function checkDate(dt) {
    startBtn.disabled = true;

    const now = new Date();
    if (dt < now) {
        Notiflix.Report.failure("Please choose a date in the future");
        return;
    }
    startBtn.disabled = false;
    endDate = dt.getTime();
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        checkDate(selectedDates[0]);
    },
};

flatpickr(input, options);

startBtn.addEventListener("click", () => {
    const timerId = setInterval(() => {
        const now = new Date().getTime();
        const t = endDate - now;
        if (t < 0) {
            clearInterval(timerId);
            return;
        }
        const res = convertMs(t);

        days.innerHTML = addLeadingZero(res.days);
        hours.innerHTML = addLeadingZero(res.hours);
        minutes.innerHTML = addLeadingZero(res.minutes);
        seconds.innerHTML = addLeadingZero(res.seconds);
        // console.log(res);
    }, 1000);
    Notiflix.Notify.success();
});

function addLeadingZero(num) {
    return String(num).padStart(2, "0");
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  