function solution(A,B){
    let answer = 0
    const sortedA = A.sort((a,b) => b-a)
    const sortedB = B.sort((a,b) => a-b)
    for (let i = 0 ; i < sortedB.length; i++) {
        answer += sortedA[i] * sortedB[i]
    }
    return answer
}