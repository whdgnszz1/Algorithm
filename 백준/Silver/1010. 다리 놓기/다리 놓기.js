const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputC = +input[0];

function combination(n, m) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= (m - i);
        result /= (i + 1);
    }
    return result;
}

for(let i = 1; i <= inputC; i++) {
    const [n, m] = input[i].split(" ").map(Number);
    console.log(combination(n, m));
}