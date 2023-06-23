function solution(n) {
    var answer = 0;
    let count = 0
    let a = 0;
    let b = 1;
    while(count !== n - 1) {
        count ++
        let c = (a + b) % 1234567
        a = b % 1234567
        b = c % 1234567
        answer = c % 1234567
    }
    return answer % 1234567;
}