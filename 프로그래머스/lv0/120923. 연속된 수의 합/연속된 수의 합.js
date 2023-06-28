function solution(num, total) {
    var answer = [];
    let k = (total - (num) * (num-1) / 2) / num
    for (let i = 0 ; i < num ; i++) {
        answer.push(k + i)
    }
    return answer;
}