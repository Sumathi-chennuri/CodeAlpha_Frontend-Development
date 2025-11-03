const display = document.getElementById("display");

// Append numbers
function appendNumber(num) {
  display.value += num;
}

// Append operators
function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return; // avoid double operators
  display.value += op;
}

// Append dot
function appendDot() {
  const parts = display.value.split(/[\+\-\*\/]/);
  const last = parts[parts.length - 1];
  if (!last.includes('.')) display.value += '.';
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value) || '';
  } catch {
    display.value = 'Error';
  }
}

// Bonus: Keyboard Support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    display.value += key;
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
