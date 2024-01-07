function solution(a, d, included) {
    var answer = 0;
    included.map((boolean, i) => {
        if(boolean) {
            answer += i * d + a
        }
    })
    
    return answer;
}