const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input.map((v) => {
  return [v.split(" ")[1], v.split(" ")[2]];
});

arr.map((v) => {
  v[0] = Number(v[0])
  switch (v[1]) {
    case "A+":
      v[1] = 4.5;
      break;
    case "A0":
      v[1] = 4.0;
      break;
    case "B+":
      v[1] = 3.5;
      break;
    case "B0":
      v[1] = 3.0;
      break;
    case "C+":
      v[1] = 2.5;
      break;
    case "C0":
      v[1] = 2.0;
      break;
    case "D+":
      v[1] = 1.5;
      break;
    case "D0":
      v[1] = 1.0;
      break;
    case "F":
      v[1] = 0;
      break;
    case "P":
      v[0] = 0;
      v[1] = 0
      break;
  }
});

let sum1 = arr.map(v => v[0]).reduce((a,b) => a+b)
let sum2 = arr.map(v => v[0] * v[1]).reduce((a,b) => a+b)
console.log(sum2/sum1)