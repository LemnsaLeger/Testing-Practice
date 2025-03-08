function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// str.charAt(0).toUpperCase() capitalize the first letter of the string
// str.slice(1).toLowerCase() keeps the rest of the string in lowercase
module.exports = capitalize;

// function to reverse string
function reverseString(str) {
  let reversedStr = "";
  let i = str.length - 1;
  while (i >= 0) {
    reversedStr += str.charAt(i);
    i--;
  }

  return reversedStr;
}

module.exports = reverseString;

// calculator
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  product: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    return a / b;
  },
  substract: function (a, b) {
    return a - b;
  },
};

module.exports = calculator;

// caesarCipher
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z", // Uppercase
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z", // Lowercase
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9", // Digits
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/", // Common punctuation
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~", // More punctuation and symbols
  "-",
  "_",
  "=",
  "+",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "<",
  ">",
  ".",
  ",",
  "!",
  "?",
  ";",
  ":",
  "/",
  "\\",
  '"',
  "'", // Other symbols
];

// Helper function to check if a character is alphabetic
function isAlphabetic(char) {
  return /[A-Za-z]/.test(char);
}

// Helper function to handle the shift logic for alphabetic characters
function shiftCharacter(char, shiftFactor) {
  let key = characters.indexOf(char);

  if (key === -1) return char; // If it's not alphabetic, return the character as is

  // Determine if the character is uppercase or lowercase
  let newKey = (key + shiftFactor) % 26;

  if (char === char.toUpperCase()) {
    return characters[newKey]; // Uppercase shifted character
  } else {
    return characters[newKey + 26]; // Lowercase shifted character
  }
}

// Main Caesar Cipher function
function caesarCipher(str, shiftFactor) {
  let caeserValue = "";

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (isAlphabetic(char)) {
      // If the character is alphabetic, shift it
      caeserValue += shiftCharacter(char, shiftFactor);
    } else {
      // Non-alphabetic characters remain unchanged
      caeserValue += char;
    }
  }

  return caeserValue;
}

module.exports = caesarCipher;

// obj with array properties
function analyzeArray(array) {
    let maxNum;
    // min number in the array(bubble sort)
  function min() {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        // Avoid out-of-bounds error
        if (array[j] > array[j + 1]) {
          // Swap the elements if they're in the wrong order
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    maxNum = array[array.length - 1];
    return array[0];
  }
  const minNum = min();

//   function to calculate the mean 
  function average() {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
  }

  const averageNum = average();

  return { min: minNum, average: averageNum, max: maxNum, length: array.length };
}

module.exports = analyzeArray;