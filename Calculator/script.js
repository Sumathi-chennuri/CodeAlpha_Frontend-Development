const display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += op;
}

function appendDot() {
  if (!display.value.endsWith('.')) display.value += '.';
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Bonus: Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    display.value += key;
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
