function solution(n, k) {
    const answer = []
    const share = Math.floor(n / k)
    for(let i = 1 ; i <= share ; i++) {
        answer.push(i * k)
    }
    return answer
}