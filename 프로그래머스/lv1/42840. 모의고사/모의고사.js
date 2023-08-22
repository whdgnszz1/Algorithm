function solution (answers) {
  let result = []

  let [patternOne, cnt1] = [[1,2,3,4,5], 0] // 길이 5
  let [patternTwo, cnt2] = [[2,1,2,3,2,4,2,5], 0] // 길이 8
  let [patternThree, cnt3] = [[3, 3, 1, 1, 2, 2, 4, 4, 5, 5], 0] // 길이 10

  for (let i=0; i<answers.length; i++) {
    if (answers[i] === patternOne[i % 5]) cnt1 ++
    if (answers[i] === patternTwo[i % 8]) cnt2 ++
    if (answers[i] === patternThree[i % 10]) cnt3 ++
  }
  let maxAnswer = Math.max(cnt1,cnt2,cnt3)
  let tmp = [cnt1,cnt2,cnt3]
    
  for (let i=1; i<=3; i++) {
    if (maxAnswer === tmp[i-1]) result.push(i)
  }

  return result
}