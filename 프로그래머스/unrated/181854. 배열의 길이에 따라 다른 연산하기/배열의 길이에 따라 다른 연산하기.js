function solution(arr, n) {
    var answer = [];
    if(arr.length % 2 === 0) {
        arr.map((v,i) => {
            i % 2 === 1 ? answer.push(v + n) :answer.push(v)
        })
    } else {
        arr.map((v,i) => {
            i % 2 === 0 ? answer.push(v + n) :answer.push(v)
        })  
    }
    return answer;
}