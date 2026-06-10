// Calculator functions used by the CLI and tests

// Supported operations (as requested in the image):
//  - addition: +
//  - subtraction: -
//  - multiplication: × (also supports 'x' or '*')
//  - division: ÷ (also supports '/')

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
    throw new Error('division by zero');
  }
  return a / b;
}

function normalizeOperator(op) {
  if (!op) return op;
  if (op === '×' || op === 'x' || op === 'X') return '*';
  if (op === '÷') return '/';
  return op;
}

function calculate(a, operator, b) {
  const op = normalizeOperator(operator);
  switch (op) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };
