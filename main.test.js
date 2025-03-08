const analyzeArray = require('./main');
const caesarCipher = require('./main');
const calculator = require('./main');
const reverseString = require('./main');
const capitalize = require('./main');
const main = require('./main');
// capitalize case
it("main should exist", () => {
    expect(require('./main')).toBeDefined();
})

it("Capitalize first letter", () => {
    expect(capitalize('me')).toBe('Me');
})

it("Capitalize first letter in Words In CAPS", () => {
    expect(capitalize('MONDAY')).toBe('Monday');
})

// testing reverse string func
it("Reverse string", () => {
    expect(reverseString('you')).toBe('uoy');
})

it("Reverse string", () => {
  expect(reverseString("y")).toBe("y");
});

// testing calculator
it("Add two numbers", () => {
    expect(calculator.add(1, 3)).toBe(4);
})

it("Substract two numbers", () => {
    expect(calculator.substract(1, 3)).toBe(-2);
})

it("Multiply two numbers", () => {
  expect(calculator.product(1, 3)).toBe(3);
});

it("Divide two numbers", () => {
    expect(calculator.division(2,4)).toBe(.5);
})

// testing caesarCipher
it("For CAPS words", () => {
    expect(caesarCipher('ABC', 1)).toBe('BCD');
})

it("wrapping from z to a", () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

it("shifted lettercase should follow the original lettercase", () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

it(
  "Punctuation, spaces, and other non-alphabetical characters should remain unchanged", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  }
);

// test object with array features
it("Return object with array features", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      min: 1,
      average: 4,
      max: 8,
      length: 6,
    });
})