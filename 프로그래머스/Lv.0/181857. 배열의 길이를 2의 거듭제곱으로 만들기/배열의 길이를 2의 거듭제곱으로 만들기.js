function solution(arr) {
    const answer = arr
    let pow = 1
    while(arr.length > pow) {
        pow = pow * 2
    }
    
    for (let i = arr.length ; i < pow ; i ++)  {
        answer.push(0)
    }
    return answer
}