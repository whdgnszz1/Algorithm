const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let test1 = input.replace(/s=/g, "1")
let test2 = test1.replace(/c=/g, "1")
let test3 = test2.replace(/c-/g, "1")
let test4 = test3.replace(/dz=/g, "1")
let test5 = test4.replace(/d-/g, "1")
let test6 = test5.replace(/lj/g, "1")
let test7 = test6.replace(/z=/g, "1")
let test8 = test7.replace(/nj/g, "1")

// let a = input.replace(/c= | c- | dz= | d- | lj | nj | s= | z=/gi, "1" )
console.log(test8.length)