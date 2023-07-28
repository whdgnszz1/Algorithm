const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

let len = Array.from({ length: parseInt(input[0].split(' ')[0]) }, (_, index) => index + 1);
const num = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < num.length; i++) {
  let targetIndex = len.indexOf(num[i]);
  
  let leftCount = targetIndex;
  let rightCount = len.length - targetIndex;
  
  if (leftCount <= rightCount) {
    for (let j = 0; j < leftCount; j++) {
      len.push(len.shift());
    }
    answer += leftCount;
  } else {
    for (let j = 0; j < rightCount; j++) {
      len.unshift(len.pop());
    }
    answer += rightCount;
  }
  
  len.shift();
}

console.log(answer);