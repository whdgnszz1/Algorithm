function solution(X, Y) {
  let answer = ""
  let xArr = X.split("")
  let yMap = new Map()
  Y.split("").map(y => {
      yMap.has(y) ? yMap.set(y, yMap.get(y) + 1) : yMap.set(y, 1)
  })

    xArr.map(x => {
        if (yMap.has(x)) {
            if(yMap.get(x) > 0) {
                answer += x
                yMap.set(x, yMap.get(x)-1)
            }
        }
    })
    answer = answer.split("").sort((a,b) => b-a).join("")
    if(answer.length === 0) {
        return "-1"
    } else if(Number(answer) === 0) {
        return "0"        
    } else {
        return answer
    }
     
}




  // var answer = '';
  //   let sortedXArr = X.split("").sort((a,b) => b-a)
  //   let sortedYArr = Y.split("").sort((a,b) => b-a)
  //   sortedXArr.map(x => {
  //       if(sortedYArr.indexOf(x) !== -1) {
  //           answer += x
  //           sortedYArr.splice(sortedYArr.indexOf(x),1)
  //       }
  //   })
  //   if(answer.length === 0) {
  //       return "-1"
  //   } else if (Number(answer) === 0) {
  //       return "0"
  //   } else {
  //       return answer
  //   }