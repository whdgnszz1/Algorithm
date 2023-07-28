const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ').map(Number);

let arr = Array.from( {length : input[0]}, (_, index) => (index + 1))
let k = input[1]- 1
let answerArr = []

while(arr.length !== 0) {
  for(let i = 0 ; i < k ; i++) {
    arr.push(arr.shift())
  }
  answerArr.push(arr.shift())
}

console.log(`<${answerArr.join(', ')}>`)