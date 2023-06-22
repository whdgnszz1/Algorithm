function solution(s) {
    var answer = [];
    let arr = s.split("").map((v,i) => [v,i])
    s.split("").map((v,i) => {
        if(i === s.split("").indexOf(v)) {
            answer.push(-1)
        } else {
            let filteredArr = arr.filter(item => item[0] === v).map(v => v[1])
            answer.push(i - filteredArr[filteredArr.indexOf(i) - 1])
            
        }
    })
    return answer;
}