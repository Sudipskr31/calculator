// Variable to store the current input number
let currentInput = "";
// Variable to store the current operation
let currentOperation = "";
// Variable to store the previous input number
let previousInput = "";

// Function to update the display with the given value
const updateDisplay = (value) => {
  document.getElementById("display").value = value;
};

// Function to handle number button clicks
const numbers = (number) => {
  currentInput += number;
  updateDisplay(`${previousInput} ${currentOperation} ${currentInput}`);
};

// Function to handle operation button clicks
const operations = (operation) => {
  if (!currentInput) return;
  if (currentOperation) calculate();

  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay(`${previousInput} ${currentOperation}`);
};

// Function to perform the calculation based on the current operation
const calculate = () => {
  if (!previousInput || !currentInput) return;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  let result;

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev !== 0 ? prev / current : "Error";
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  updateDisplay(result === "Error" ? "Error" : currentInput);
};

// Function to clear the display and reset all variables
const clearDisplay = () => {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  updateDisplay("");
};