function solution(k, tangerine) {
    var answer = 0;
    let arr = tangerine.sort((a,b) => a - b)
    let orange = new Map()
    
    for (let i = 0 ; i < tangerine.length ; i++) {
        orange.set(arr[i], 0)
    }
    
    for (let j = 0 ; j < tangerine.length ; j++) {
        orange.set(arr[j], orange.get(arr[j]) + 1)
    }
    
    
    let orangeArr = [...orange].sort((a,b) =>  {
        if(  a[1] < b[1]) {
            return 1
        } else if (a[1] > b[1]) {
            return -1
        } else {
            return 0
        }
    })
    console.log(orangeArr)
    let sum = 0
    let i = 0
    while (sum < k) {
        sum += orangeArr[i][1]
        i++
        answer++
    }
    return answer
}