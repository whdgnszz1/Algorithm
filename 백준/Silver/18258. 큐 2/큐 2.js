const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const inputC = input[0]
const insertArr = [];
const removeArr = [];
const answerArr = [];

for (let i = 1; i <= inputC; i++) {
  const [command, value] = input[i].split(' ');

  switch (command) {
    case 'push':
      insertArr.push(value);
      break;
    case 'pop':
      if (removeArr.length === 0 && insertArr.length > 0) {
        while (insertArr.length) {
          removeArr.push(insertArr.pop());
        }
      }
      answerArr.push(removeArr.length ? removeArr.pop() : -1);
      break;
    case 'size':
      answerArr.push(insertArr.length + removeArr.length);
      break;
    case 'empty':
      answerArr.push((insertArr.length + removeArr.length) === 0 ? 1 : 0);
      break;
    case 'front':
      answerArr.push(removeArr.length ? removeArr[removeArr.length - 1] : (insertArr.length ? insertArr[0] : -1));
      break;
    case 'back':
      answerArr.push(insertArr.length ? insertArr[insertArr.length - 1] : (removeArr.length ? removeArr[0] : -1));
      break;
  }
}

console.log(answerArr.join("\n"));
