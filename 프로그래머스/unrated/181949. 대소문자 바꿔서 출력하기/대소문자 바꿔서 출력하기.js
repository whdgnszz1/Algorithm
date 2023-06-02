const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer=""
    let arr = str.split("")
    arr.map((v,i) => {
        v.toUpperCase() === arr[i] ? answer += v.toLowerCase() : answer += arr[i].toUpperCase()
    })
    console.log(answer)
    
});