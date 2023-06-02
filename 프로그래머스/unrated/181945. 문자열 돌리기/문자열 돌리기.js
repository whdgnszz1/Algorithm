const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let answer = ''
    str = input[0];
    let arr = str.split("")
    arr.map(v => {
        answer += v
        answer += "\n"
    })
    console.log(answer)
});