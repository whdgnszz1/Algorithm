const solution = (input) => {
  const pocketmonArr = new Map()

  const evolutionCount = (str) => {
    let [need, now] = str.split(" ").map(Number)
    let count = 0
    while(now / need >= 1) {
      let num = Math.floor(now / need)
      count += num
      now -= (need * num) - (num * 2)
    }
    return count
  }
  
  for(let i = 0; i < input.length; i += 2) {
    pocketmonArr.set(input[i], evolutionCount(input[i + 1]))
  }
  
  let sortedPocketmonArr =[...pocketmonArr].sort((a,b) => b[1] - a[1])
  const answerCount = sortedPocketmonArr.map(v=> v[1]).reduce((a,b)=> a + b)
  const answerName = sortedPocketmonArr[0][0]
  
  return [answerCount, answerName].join('\n').trim()
};

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pokemon = [];
let count = 0;
rl.on("line", function (line) {
  if (count === 0) {
    count = Number(line);
  } else {
    pokemon.push(line);
  }
  if (pokemon.length === count * 2) {
    rl.close();
  }
}).on("close", function () {
  console.log(solution(pokemon));
  process.exit();
});
