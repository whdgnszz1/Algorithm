const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const recersiveCall = (number) => {
  if (number === 1) return "-";
  const result = recersiveCall(number / 3);
  return result + " ".repeat(number / 3) + result;
};

input.forEach((num) => console.log(recersiveCall(3 ** num)));