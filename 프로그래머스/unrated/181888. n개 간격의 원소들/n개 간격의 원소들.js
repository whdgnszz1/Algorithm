function solution(num_list, n) {
    var answer = [];
    num_list.map((v,i) => {
        if(i === 0 || i % n === 0) {
            answer.push(v)
        }
    })
    return answer;
}