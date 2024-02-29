const fs = require("fs");

// Read data from the file
const data = fs.readFileSync("10m.txt", "utf8");
const numbers = data.split("\n").map(Number);

// Find the maximum and minimum numbers
// Find the maximum number manually
let maxNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

// Find the minimum number manually
let minNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

// Sort the array for finding the median
numbers.sort((a, b) => a - b);

// Find the median
let median;
const middle = Math.floor(numbers.length / 2);
if (numbers.length % 2 === 0) {
  median = (numbers[middle - 1] + numbers[middle]) / 2;
} else {
  median = numbers[middle];
}

// Find the average
const average = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;

// Find the longest increasing sequence
let longestIncreasingSequence = 0;
let currentIncreasingCount = 0;
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    currentIncreasingCount++;
  } else {
    currentIncreasingCount = 0;
  }

  if (currentIncreasingCount > longestIncreasingSequence) {
    longestIncreasingSequence = currentIncreasingCount;
  }
}

// Find the longest decreasing sequence
let longestDecreasingSequence = 0;
let currentDecreasingCount = 0;
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < numbers[i - 1]) {
    currentDecreasingCount++;
  } else {
    currentDecreasingCount = 0;
  }

  if (currentDecreasingCount > longestDecreasingSequence) {
    longestDecreasingSequence = currentDecreasingCount;
  }
}

// Output the results
console.log("Maximum number:", maxNumber);
console.log("Minimum number:", minNumber);
console.log("Median:", median);
console.log("Average:", average);
console.log("Longest increasing sequence:", longestIncreasingSequence);
console.log("Longest decreasing sequence:", longestDecreasingSequence);
