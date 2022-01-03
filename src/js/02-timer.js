// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';



const refs = {
    input: document.querySelector('#datetime-picker'),
    button: document.querySelector('[data-start]') ,
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')

};

refs.button.disabled = true;
// refs.input.addEventListener('input', setDate);
let timerId = null;
let choseDate = 0;
let timeLeft = 0;
// function setDate(e) {
//     date = new Date(e.target.value).getTime();
// }
// refs.button.addEventListener();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      // console.log(selectedDates[0]);
  
    const selectedDate = selectedDates[0].getTime();
    const currentDate = this.config.defaultDate.getTime();
    if (currentDate > selectedDate) {
      return Notiflix.Report.failure('Please choose a date in the future');
    }

    refs.button.disabled = false;
    }, }


    flatpickr(refs.input, options);

    refs.button.addEventListener('click', startClock);
  
  function startClock() {
    refs.button.removeEventListener('click', startClock);
    timerId = setInterval(() => {
      let nowDate = Date.now();
      timeLeft = choseDate - nowDate;
       updateClockFase(convertMs(timeLeft));
      // console.log(timeLeft);
      if (timeLeft < time) {
        clearInterval(timerId);
      }

      function addLeadingZero(value) {
        return String(value).padStart(2, '0');}

   
  




function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  function updateClockFase({ days, hours, minutes, seconds }) {
    refs.days.innerHTML = `${days}`;
    refs.hours.innerHTML = `${hours}`;
    refs.minutes.innerHTML = `${minutes}`;
    refs.seconds.innerHTML = `${seconds}`;
  
  Notiflix.Notify.success()
  }})}
