function solution(n, lost, reserve){
  let count = 0

  for(let i = 0 ; i < lost.length; i++) {
    if(reserve.indexOf(lost[i]) !== -1){
      let reserveIndex = reserve.indexOf(lost[i])
      reserve.splice(reserveIndex, 1)
      lost.splice(i, 1)
      i -= 1
    }
  }

  lost.sort((a,b) => a-b)

  for(let i = 0; i < lost.length; i++) {
    if(reserve.indexOf(lost[i] - 1) !== -1) {
      let reserveIndex = reserve.indexOf(lost[i] - 1)
      reserve.splice(reserveIndex, 1)
      continue
    }

    if(reserve.indexOf(lost[i] + 1) !== -1) {
      let reserveIndex = reserve.indexOf(lost[i] + 1)
      reserve.splice(reserveIndex, 1)
      continue
    }

    count++
  }
  return n - count
}