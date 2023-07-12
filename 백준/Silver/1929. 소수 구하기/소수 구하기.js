const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);
const M = input[0];
const N = input[1];
const primeNumbers = new Array(N + 1).fill(true);
primeNumbers[0] = false;
primeNumbers[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (primeNumbers[i]) {
    for (let j = i * i; j <= N; j += i) {
      primeNumbers[j] = false;
    }
  }
}

for (let i = M; i <= N; i++) {
  if (primeNumbers[i]) {
    console.log(i);
  }
}