function solution(n) {
    var answer = 0;
    // for (let i = 1; i <= n; i++) {
    //     if (n % i === 0) {
    //         answer++
    //     }
    // }
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if(n / i === i) {
            answer ++
        } else if(n % i === 0) {
            answer += 2
        }
    }
    return answer;
}