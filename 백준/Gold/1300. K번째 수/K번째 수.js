const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.map(Number)

let min = 1;
let max = K;
let answer = N * N;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    cnt += Math.min(Math.floor(mid / i), N)
  }
  if (cnt < K) {
    min = mid + 1;
  } else {
    if (answer > mid) answer = mid;
    max = mid - 1;
  }
}
console.log(answer)