let a = null;
let b = null;
let op = "";
let firstNum = "";

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => ((b === 0) ? "Are you dumb?" : a/b);

const numberButtons = document.querySelectorAll(".number");
const displayElement = document.querySelector(".display p");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equals");
const decimalButton = document.querySelector(".decimal");

function operate(a, b, op) {
  switch (op) {
    case "+":
      return add(a,b);
    case "-":
      return subtract(a,b);
    case "*":
      return multiply(a,b);
    case "/":
      return divide(a,b);
    default:
      return "Invalid operator";
  }
}

numberButtons.forEach( (button) => {
  button.addEventListener("click", handleNumberClick);
})

function handleNumberClick (event) {
  const number = event.target.textContent;
  updateDisplay(number);
}

function updateDisplay(value) {
  if (value === "") {
    displayElement.textContent = "" //Clears the display
  } else {
    displayElement.textContent += value; //Appends numbers for more than 1 digit
  }
}

operatorButtons.forEach ( (button) => {
  button.addEventListener("click", handleOperatorClick);
})

function handleOperatorClick (event) {
  if (firstNum !== "") return; //When the operator button is clicked, this function executes. But a user may try entering back to back operators. To prevent this, say "if firstNum already exists, then you can't do that, and the function exits immediately"

  firstNum = displayElement.textContent;
  op = event.target.textContent;
  updateDisplay("");
}

clearButton.addEventListener("click", () => updateDisplay(""));

equalButton.addEventListener("click", executeCalc);

function executeCalc() {
  let a = Number(firstNum);
  let b = Number(secondNum);

  let result = operate(a,b,op)
  updateDisplay(result);
}

decimalButton.addEventListener("click", addDecimalPoint);

function addDecimalPoint() {
  if (operator === "") { //This means we're working on the firstNum
    if (!firstNum.includes(".")) {
      firstNum += ".";
      updateDisplay(firstNum);
    } else { //We're on secondNum now
      if (!secondNum.includes(".")) {
        secondNum += ".";
        updateDisplay(secondNum);
      }
    }
  }
}


