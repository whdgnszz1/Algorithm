const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const inputC = input[0].split(" ")[0];
const num = input[0].split(" ")[1];
const cardArr = input[1].split(" ").map(Number).sort((a,b) => a - b);

let answerArr = [];
for(let i = 0 ; i < inputC - 2 ; i++) {
  for(let j = i + 1 ; j < inputC - 1 ; j++) {
    for(let k = j + 1 ; k < inputC ; k++) {
      if(cardArr[i] + cardArr[j] + cardArr[k] <= num) {
        answerArr.push(cardArr[i] + cardArr[j] + cardArr[k])
      } else {
        break;
      }
     
    }
  }
}

let blackjack = answerArr.map(v => {
  return [v, Math.abs(v-num)]
})

let sortedBlackjack = blackjack.sort((a,b) => a[1] - b[1])

console.log(sortedBlackjack[0][0])