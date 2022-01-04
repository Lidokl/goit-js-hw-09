// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';


const refs = {
    input: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
  };
  
  refs.startBtn.disabled = true;
  
  let timerId = null;
  let choseDate = 0;
  let timeLeft = 0;
  // =====================================================================
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
  
    onClose(selectedDates) {
      choseDate = selectedDates[0];
      let isNotValidDate = choseDate < options.defaultDate;
      if (isNotValidDate) {
        return Notiflix.Notify.failure('Please choose a date in the future');
      }
      refs.startBtn.disabled = false;
    },
  };
  // ==================
  flatpickr(refs.input, options);
  // =======================================================================
  refs.startBtn.addEventListener('click', startClock);
  // =======================================================================
  function startClock() {
    refs.startBtn.removeEventListener('click', startClock);
    timerId = setInterval(() => {
      let nowDate = Date.now();
      timeLeft = choseDate - nowDate;
      updateClockFase(convertMs(timeLeft));
    //   console.log(timeLeft);
      if (timeLeft < 1000) {
        clearInterval(timerId);
      }
    }, 1000);
  }
  // =======================================================================
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  // =======================================================================
  function convertMs(ms) {
    // Number of milliseconds per unit of time
  
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  // =======================================================================
  function updateClockFase({ days, hours, minutes, seconds }) {
    refs.days.innerHTML = `${days}`;
    refs.hours.innerHTML = `${hours}`;
    refs.minutes.innerHTML = `${minutes}`;
    refs.seconds.innerHTML = `${seconds}`;
  }