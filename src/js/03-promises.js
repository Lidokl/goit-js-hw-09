
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';

const refs = {
  form: document.querySelector('form'),
  inputs: document.querySelectorAll('input'),
};
let inputsValue = [];
let timerId = null;
let counter = 0;
// =============================================================================
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
}
// =============================================================================
refs.form.addEventListener('submit', startIvents);
// =======================================
function startIvents(e) {
  e.preventDefault();
  refs.inputs.forEach(getInputsValue);
  let [delay, step, amount] = inputsValue;

  timerId = setInterval(() => {
    counter += 1;
    if (amount <= counter) {
      clearInterval(timerId);
    }
    createPromise(counter, delay);
    delay += step;
    console.log(counter);
  }, delay);
}
// ===================================================
function getInputsValue(input) {
  return inputsValue.push(Number(input.value));
}