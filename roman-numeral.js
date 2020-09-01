function convertToRoman(num) {
  const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let accumulator = "";

  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      accumulator += romanNumeral[i];
      num -= decimalValue[i];
    }
  }

  return accumulator;
};

// test here
console.log(convertToRoman(36));