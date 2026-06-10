#!/usr/bin/env node

/**
 * CLI Calculator
 *
 * Supported operations:
 *  - addition: +
 *  - subtraction: -
 *  - multiplication: × (also accepts 'x' or '*')
 *  - division: ÷ (also accepts '/')
 *
 * Usage:
 *   node src/index.js <number1> <operator> <number2>
 * Examples:
 *   node src/index.js 2 + 3
 *   node src/index.js 10 × 4
 */

function showHelp() {
  console.log('Usage: node src/index.js <number1> <operator> <number2>');
  console.log('Operators: +  -  × (or x or *)  ÷ (or /)');
  process.exit(1);
}

const [, , a, op, b] = process.argv;
if (!a || !op || !b) showHelp();

const num1 = Number(a);
const num2 = Number(b);
if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.error('Error: both operands must be valid numbers.');
  process.exit(1);
}

function normalizeOperator(o) {
  if (!o) return o;
  if (o === '×' || o === 'x' || o === 'X') return '*';
  if (o === '÷') return '/';
  return o;
}

const operator = normalizeOperator(op);
let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.error('Error: division by zero');
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error(`Unsupported operator: ${op}`);
    showHelp();
}

console.log(result);
