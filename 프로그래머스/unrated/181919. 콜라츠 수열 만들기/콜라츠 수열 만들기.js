function solution(n) {
    var answer = [n];
    while(n !== 1) {
        n % 2 ? n = 3 * n + 1 : n = n / 2
        answer.push(n)
    }
    return answer;
}
