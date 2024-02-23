function moveNonNumbersToTheEnd(array) {
  let originalNumbers = [];
  let nonNumbers = [];

  for (const element of array) {
    if (typeof element === "number") {
      originalNumbers[originalNumbers.length] = element;
    } else {
      nonNumbers[nonNumbers.length] = element;
    }
  }

  for (const element of nonNumbers) {
    originalNumbers[originalNumbers.length] = element;
  }

  return originalNumbers;
}

const array = [
  "Apple",
  0,
  1,
  2,
  null,
  4,
  "false",
  0,
  0,
  1,
  "Bannana",
  5,
  7,
  undefined,
  8,
  0,
  `jbggg`,
  1,
  1,
  true,
  1,
  false,
  1,
  1,
  1,
  1,
];

console.log(moveNonNumbersToTheEnd(array));
