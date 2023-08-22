function solution (k, m, score) {
  let answer = 0
  const sortedScore = score.sort((a,b) => b - a)
  const boxArr = []

  for(let i = 0 ; i < score.length ; i += m) {
    if( sortedScore.slice(i, i+m).length >= m ) {
      boxArr.push(sortedScore.slice(i, i+m))
    }
  }

  boxArr.map(v => {
    answer += v[m-1] * m
  })

  return answer
}
