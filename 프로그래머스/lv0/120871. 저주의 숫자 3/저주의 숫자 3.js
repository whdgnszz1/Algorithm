function solution(n) {
    var answer = 0;
    let arr = Array.from({length: 3 * n}, (_,index) => index + 1 )
    let nonThreeArr = []
    arr.map(v => {
       if(v % 3 !== 0 && !String(v).includes(3)) nonThreeArr.push(v) 
    })
    console.log(nonThreeArr)
    return nonThreeArr[n-1]
}

