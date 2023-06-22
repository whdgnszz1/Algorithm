const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

if (input.length === 1) {
  console.log(input.toUpperCase());
} else {
  let str = input.toLowerCase();
  let mapObj = new Map();

  str.split("").map((v) => {
    mapObj.has(v) ? mapObj.set(v, mapObj.get(v) + 1) : mapObj.set(v, 1);
  });

  let sortedArr = [...mapObj].sort((a, b) => b[1] - a[1]);
  if (sortedArr[0][1] === sortedArr[1][1]) {
    console.log("?");
    return;
  } else {
    console.log(sortedArr[0][0].toUpperCase());
    return;
  }
}
