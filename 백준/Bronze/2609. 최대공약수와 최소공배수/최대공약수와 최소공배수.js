const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map((v) => +v).sort((a,b) => b - a) ;

let a = input[0]
let b = input[1]
let r ;
while(r != 0) {
  r = a % b
  a = b
  b = r
}
let answer = [a, input[0] * input[1] / a]
console.log(answer.join('\n'))