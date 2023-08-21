const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim()

const inputToNumArr = input.split('.').map(v => v.length)
const answer = inputToNumArr.map(v => {
  if(v === 0) {
    return v = "." 
  } else if(v % 2 === 0 && v % 4 === 0) {
    v ='AAAA'.repeat(Math.floor(v/4))
    v+='.'
    return v 
  } else if(v % 2 === 0 && v % 4 > 0) {
    v ='AAAA'.repeat(Math.floor(v/4))
    v += 'BB'
    v += '.'
    return v
  }
})
if(answer.includes(undefined)) {
  console.log(-1)
  return;
}

const answerArr = answer.join("").split("")
answerArr.pop()
console.log(answerArr.join(""))
