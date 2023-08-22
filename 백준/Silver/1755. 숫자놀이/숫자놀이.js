const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [startNum, endNum] = input;

const numArr = Array.from(
  { length: endNum - startNum + 1 },
  (_, index) => startNum + index
)
  .map(String)
  .map((v) =>v.split(""));

const stringArr = numArr.map((v) => {
  return v.map((number) => {
    switch (number) {
      case "1":
        return (number = "one");
      case "2":
        return (number = "two");
      case "3":
        return (number = "three");
      case "4":
        return (number = "four");
      case "5":
        return (number = "five");
      case "6":
        return (number = "six");
      case "7":
        return (number = "seven");
      case "8":
        return (number = "eight");
      case "9":
        return (number = "nine");
      case "0":
        return (number = "zero");
    }
  });
});
const answer = []

const answerArr = stringArr.map((v,i) => {
  return [i + startNum, v.join(" ")]
})

answerArr.sort((a,b) => a[1].localeCompare(b[1]))
const sortedAnswerArr = answerArr.map(v => v[0])
for(let i = 1 ; i <= Math.ceil(sortedAnswerArr.length / 10) ; i++){
  answer.push(sortedAnswerArr.slice(10*(i-1), 10*i).join(" "))
}
console.log(answer.join('\n').trim())