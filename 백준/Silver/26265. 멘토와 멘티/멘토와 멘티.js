const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")

input.shift()
const sortedArr =input.map(v => v.split(" ")).sort((a,b) => {
  if(a[0].localeCompare(b[0]) > 0) {
    return 1
  } else if (a[0].localeCompare(b[0]) < 0) {
    return -1
  } else {
    if(a[1].localeCompare(b[1]) > 0) {
      return -1
    } else {
      return 1
    }
  }
})

console.log(sortedArr.map(v => v.join(" ")).join('\n').trim())