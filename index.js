let a = null;
let b = null;
let firstNum = "";
let op = "";

const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => ((b === 0) ? "Are you dumb?" : a /b);

const numberButtons = document.querySelectorAll(".number");
const displayElement = document.querySelector(".display p");
const operatorButtons = document.querySelector(".operator");

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
  displayElement.textContent += value;
}

operatorButtons.forEach ( (button) => {
  button.addEventListener("click", handleOperatorClick);
})

function handleOperatorClick (event) {
  firstNum = displayElement.textContent;
  op = event.target.textContent;
  displayElement.textContent = ""; 
}
