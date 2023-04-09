function solution(n) {
    let answer = 0
    let i = 1
    let arr = []
    while (i <= n) {
        if(n % i === 0) {
            answer += i
        }
        i++
    }
    return answer
}
