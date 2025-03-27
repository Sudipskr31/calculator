let currentInput = "";
let currentOperation = "";
let previousInput = "";

const numbers = (number) => {
  currentInput += number;
  document.getElementById("display").value =
    `${previousInput} ${currentOperation} ${currentInput}`;
};

const operations = (operation) => {
  if (currentInput === "") return;
  if (currentOperation !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById("display").value =
    `${previousInput} ${currentOperation}`;
};

const calculate = () => {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

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
      result = prev / current;
      break;
      default:
      result;
  }
  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  document.getElementById("display").value = currentInput;
};

const clearDisplay = () => {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  document.getElementById("display").value = "";
};
