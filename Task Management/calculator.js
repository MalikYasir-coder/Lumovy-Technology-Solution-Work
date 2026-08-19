// Making Variables (For Storing Values)
let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
const currentOperandDisplay = document.querySelector('.current-operand');
const previousOperandDisplay = document.querySelector('.previous-operand');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('.btn-operator');
function appendNumber(number) {
  if (currentOperand === '0' ){
    currentOperand = number;
  } else {
    currentOperand = currentOperand + number;
  }
}
function updateDisplay() {
  currentOperandDisplay.textContent = currentOperand;
  
  if (operation != null) {
    previousOperandDisplay.textContent = previousOperand + " " + operation;
  } else {
    previousOperandDisplay.textContent = "";
  }
}
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    appendNumber(button.dataset.number);
    updateDisplay();
  });
});
function chooseOperation(selectedOperation) {
  previousOperand = currentOperand;
  operation = selectedOperation;
  currentOperand = "";
}
operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    chooseOperation(button.dataset.action);
    updateDisplay();
  });
});
function calculate() {
  let result;
  let prev = parseFloat(previousOperand);
  let current = parseFloat(currentOperand);
  
  if (operation === "add") {
    result = prev + current;
  } else if (operation === "subtract") {
    result = prev - current;
  } else if (operation === "multiply") {
    result = prev * current;
  } else if (operation === "divide") {
    result = prev / current;
  }
  
  currentOperand = result;
  operation = undefined;
  previousOperand = "";
}
function clear() {
  currentOperand = "0";
  previousOperand = "";
  operation = undefined;
  updateDisplay();
}
const equalsButton = document.querySelector('[data-action="calculate"]');
const clearButton = document.querySelector('[data-action="clear"]');
equalsButton.addEventListener("click", () => {
  calculate();
  updateDisplay();
});

clearButton.addEventListener("click", () => {
  clear();
});