
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';

const refs = {
  form: document.querySelector('form'),
  inputs: document.querySelectorAll('input'),
}
refs.form.addEventListener('submit', onBtnSubmit);

function  onBtnSubmit(evt) {
  evt.preventDefault();


  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

}







function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    shouldResolve({position, delay})
    // Fulfill
  } else {
    reject({position, delay})
    // Reject
  }
}
let today = new Date();
let newYear = new Date(2022, 0, 1, 0, 0, 1);

if (today.valueOf() === newYear.valueOf()) {
  console.log('Happy New Year!!!');
}