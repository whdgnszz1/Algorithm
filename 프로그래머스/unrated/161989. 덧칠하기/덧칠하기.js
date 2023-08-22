function solution (n, m, section){
  let arrN = []
  for (let i=1; i<=n; i++) {
    if (section.includes(i) > 0) arrN.push(0)
    else arrN.push(1)
  }
  // [1, 0, 0, 1, 1, 0, 1, 1] 
  // [0, 1, 0, 1, 1]
  // [0, 0, 0, 0]
  let cnt = 0
  for (let i = 0; i < n; i++) {
    if (arrN[i] === 0) {
      cnt ++
      i += m - 1
    }
  }
  return cnt
}