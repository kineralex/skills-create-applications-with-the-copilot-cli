const { add, subtract, multiply, divide, calculate } = require('../calculator');

describe('Calculator functions', () => {
  test('addition: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
    expect(calculate(2, '+', 3)).toBe(5);
  });

  test('subtraction: 10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
    expect(calculate(10, '-', 4)).toBe(6);
  });

  test('multiplication: 45 * 2 = 90 (supports *)', () => {
    expect(multiply(45, 2)).toBe(90);
    expect(calculate(45, '*', 2)).toBe(90);
  });

  test('multiplication: supports × and x', () => {
    expect(calculate(6, '×', 7)).toBe(42);
    expect(calculate(6, 'x', 7)).toBe(42);
  });

  test('division: 20 / 5 = 4 (supports / and ÷)', () => {
    expect(divide(20, 5)).toBe(4);
    expect(calculate(20, '/', 5)).toBe(4);
    expect(calculate(20, '÷', 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('division by zero');
    expect(() => calculate(1, '/', 0)).toThrow('division by zero');
  });

  test('handles negative and decimal numbers', () => {
    expect(calculate(-2, '+', 3.5)).toBeCloseTo(1.5);
    expect(calculate(5.5, '-', -2)).toBeCloseTo(7.5);
    expect(calculate(-3, '*', -2)).toBe(6);
    expect(calculate(7.5, '/', 2.5)).toBeCloseTo(3);
  });

  test('unsupported operator throws', () => {
    expect(() => calculate(1, '%', 2)).toThrow('Unsupported operator');
  });
});
