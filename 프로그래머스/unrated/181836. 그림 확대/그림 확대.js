function solution(picture, k) {
    let answer= []
    let arr = picture.map(v => v.split("").map(v => v.repeat(k)).join(""))
    arr.map(v => {
        for(let i = 0 ; i < k ; i++) {
            answer.push(v)
        }
    })
    return answer
}

