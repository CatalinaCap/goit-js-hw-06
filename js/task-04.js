let counterValue = 0;
const valueSpan = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
function updateCounterDisplay() {
  valueSpan.textContent = counterValue;
}
function handleDecrement() {
  counterValue -= 1;
  updateCounterDisplay();
}
function handleIncrement() {
  counterValue += 1;
  updateCounterDisplay();
}
decrementButton.addEventListener('click', handleDecrement);
incrementButton.addEventListener('click', handleIncrement);
updateCounterDisplay();