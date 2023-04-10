const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr = input.map((v) => v.split(" ").map((a) => +a))
arr.shift()
arr.sort((a,b) => a[0] - b[0])
arr.sort((a,b) => a[1] - b[1])
let arr2 = arr.map((v) => v.join(" "))
console.log(arr2.join("\n"))