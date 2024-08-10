function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  } else {
    return a / b;
  }
}

console.log(add(5, 7)); // Returns 12
console.log(subtract(10, 3)); // Returns 7
console.log(multiply(4, 6)); // Returns 24
console.log(divide(20, 5)); // Returns 4
console.log(divide(10, 0)); // Returns "Error: Division by zero is not allowed."


let operand1
,   operand2
,   operator;


function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "Invalid operator!";
  }
}

console.log(operate("*", 5, 7)); // Outputs 35
console.log(operate("/", 10, 2)); // Outputs 5
console.log(operate("-", 15, 5)); // Outputs 10
console.log(operate("+", 3, 3)); // Outputs 6
console.log(operate("/", 10, 0)); // Outputs "Error: Division by zero is not allowed."
console.log(operate("$", 10, 0)); // Outputs "Invalid operator!"

