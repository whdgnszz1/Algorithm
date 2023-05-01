function solution(array) {
    let arr = new Map() // O(1)
    array.map(v => {
        arr.has(v)? 
        arr.set(v, arr.get(v)+1) : 
        arr.set(v, 1)
    })
    console.log(arr)
    let repeatArr = [...arr].map(v => v[1])
    let maxNum = Math.max(...repeatArr)
    let answerArr = [...arr].filter(v => v[1] == maxNum)
    return answerArr.length > 1 ? -1 : answerArr[0][0]
}