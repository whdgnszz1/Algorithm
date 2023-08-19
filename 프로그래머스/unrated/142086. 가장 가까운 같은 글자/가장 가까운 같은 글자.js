function solution(s) {
  let answer = []
  let sArr = s.split("")
  let pushArr = []
  sArr.forEach((a) => {
    let prevLastIndex = pushArr.lastIndexOf(a) 
    if(prevLastIndex === -1) {
      pushArr.push(a)
      answer.push(-1)
    } else {
      pushArr.push(a)
      let nextLastIndex = pushArr.lastIndexOf(a)
      answer.push(nextLastIndex - prevLastIndex)
    }
  })
  return answer;
}