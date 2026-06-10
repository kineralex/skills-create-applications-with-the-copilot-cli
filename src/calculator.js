// Calculator functions used by the CLI and tests

// Supported operations (as requested in the image):
//  - addition: +
//  - subtraction: -
//  - multiplication: × (also supports 'x' or '*')
//  - division: ÷ (also supports '/')
//  - modulo: %
//  - exponentiation: ^ or **
//  - square root: sqrt or √

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

function modulo(a, b) {
  // JavaScript % operator follows sign of dividend; this mirrors common calculator behavior.
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('square root of negative number');
  }
  return Math.sqrt(n);
}

function normalizeOperator(op) {
  if (!op) return op;
  if (op === '×' || op === 'x' || op === 'X') return '*';
  if (op === '÷') return '/';
  if (op === '^' || op === '**') return '**';
  if (op === '√' || op === 'sqrt') return 'sqrt';
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
    case '%':
      return modulo(a, b);
    case '**':
      return power(a, b);
    case 'sqrt':
      // unary operation: ignore b and compute sqrt(a)
      return squareRoot(a);
    default:
      throw new Error(`Unsupported operator: ${operator}`);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
