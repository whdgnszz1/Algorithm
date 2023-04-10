const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const inputC = input[0]
for(i = 1; i <= inputC; i++) {
  const x = input[i].split(' ')[0] 
  const y = input[i].split(' ')[1] 
  const a = Math.sqrt(y - x)
  let answer = 0
  if ( a % 1 === 0) {
    answer = 2 * a - 1
  } else {
    const b = Math.floor(a) ** 2
    const c = Math.ceil(a) ** 2
    if ( (b + c) / 2 > y - x) {
      answer = 2 * Math.ceil(a) - 2
    } else (
      answer = 2 * Math.ceil(a) -1
    )
  }
  console.log(answer)
}