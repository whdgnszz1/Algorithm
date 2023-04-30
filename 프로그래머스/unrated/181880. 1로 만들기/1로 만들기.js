function solution(num_list) {
    var answer = 0;
    num_list.map(v => {
        while(v !== 1) {
            v % 2 === 0 ? v = v / 2 : v = (v - 1) / 2
            answer++
        }
    }) 
    return answer;
}