const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n');

for(let s of input) {
    if (s === ".") break; // 입력 종료 조건

    let stack = [];
    let valid = true;

    for(let char of s) {
        if(char === '(' || char === '[') {
            stack.push(char);
        } else if(char === ')' && (stack.length === 0 || stack[stack.length-1] !== '(')) {
            valid = false;
            break;
        } else if(char === ']' && (stack.length === 0 || stack[stack.length-1] !== '[')) {
            valid = false;
            break;
        } else if(char === ')' || char === ']') {
            stack.pop();
        }
    }

    if(!valid || stack.length !== 0) {
        console.log('no');
    } else {
        console.log('yes');
    }
}
