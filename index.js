let a = null;
let b = null;
let op = "";
let firstNum = ""
let secondNum = "";

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
  if (firstNum !== "" && displayElement.textContent === "") return;

  if (firstNum !== "" && op !== "" && displayElement.textContent !== "") {
    secondNum = displayElement.textContent;
    executeCalc();
  }

  firstNum = displayElement.textContent; //This is the result from the first part of a chaining calc (3 + 5 - 2)
  op = event.target.textContent; //Stores your new operator
  updateDisplay(""); //Clears the display for your secondNum input
}

clearButton.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  op = "";
  updateDisplay("");
})

equalButton.addEventListener("click", executeCalc);

function executeCalc() {
  secondNum = displayElement.textContent;

  if (firstNum === "" || secondNum === "") return;

  let a = Number(firstNum);
  let b = Number(secondNum);

  let result = operate(a,b,op)

  displayElement.textContent = result;
  firstNum = result;
  secondNum = "";
  op = "";
}

decimalButton.addEventListener("click", addDecimalPoint);

function addDecimalPoint() {
  if (op === "") { //This means we're working on the firstNum
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


