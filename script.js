let firstOperand;
let secondOperand;

let step = 0;
let operator;
let result = 0;
 
let firstOperandArr = [];
let secondOperandArr = [];

let display = document.getElementById('display')

function getOperand(number) {
  if (step === 0 || step === 1) {
    step = 1;
    firstOperandArr.push(number); // Create an array to work with multiple digit numbers [1, 8, 4...]
    firstOperand = Number(firstOperandArr.join('')); // Merge the array into one string then into a Number
    display.value = firstOperand;
  } else if (step === 2) {
    secondOperandArr.push(number)
    secondOperand = Number(secondOperandArr.join(''));
  }
}

function getOperator(operation) {
  step = 2;
  operator = operation;
}

function clearDisplay () {
  display.value = 0;
  firstOperand = null;
  secondOperand = null;
  step = 0;
  operation = null;
  result = 0;
  firstOperandArr = [];
  secondOperandArr = [];
}

const calcOperation = () => {
  if (operator === '+') {
    result = firstOperand + secondOperand;
    display.value = result;
  } else if (operator === '-') {
    result = firstOperand - secondOperand;
    display.value = result;
  } else if (operator === '*') {
    result = firstOperand * secondOperand;
    display.value = result;
  } else if (operator === '÷') {
    result = firstOperand / secondOperand;
    display.value = result;
  }
 }