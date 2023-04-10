const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((v) => +v);
for( i = 0 ; i < input.length-1; i++) {
  let arr = Array.from({length:input[i]}, (_, index) => input[i] + index + 1)
  let answer = 0
  arr.map((v) => {
    if(isPrime(v)) {
      answer++
    }})
    console.log(answer)
}


function isPrime(N) {
  if (N === 0) return false
  if (N === 1) return false;
  for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) return false;
  }
  return true;
}