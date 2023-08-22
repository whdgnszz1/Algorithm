function solution(lottos, win_nums) {

  let minAnswer = 0
  let zeroCnt = 0
  let minRank = 0
  let maxRank = 0
  for (let i=0; i<6; i++) {
    if (win_nums.indexOf(lottos[i]) >= 0) {
      minAnswer ++
    }
    if (lottos[i] === 0) zeroCnt ++
  }

  // minRank
  minAnswer === 1 || minAnswer === 0? minRank = 6 : minRank = 7 - minAnswer

  // maxRank
  minAnswer + zeroCnt === 1 || minAnswer + zeroCnt === 0? maxRank = 6 : maxRank = 7 - (minAnswer + zeroCnt)

  // console.log(7 - (minAnswer + zeroCnt), minRank) // 최고, 최저 순

  return [maxRank, minRank]
}