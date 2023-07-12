const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString();

const numbers = input.split("-").map((str) => {
  return str
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
});

let answer = numbers[0] * 2 - numbers.reduce((acc, cur) => acc + cur, 0);
console.log(answer);
