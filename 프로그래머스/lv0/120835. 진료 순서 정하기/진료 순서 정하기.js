function solution(emergency) {
    var answer = [];
    let arr = [...emergency]
    let sorted = emergency.sort((a,b) => b- a)
    let answerArr = arr.map(item => {
        return [item,sorted.indexOf(item)+1]
    })
    console.log(answerArr)
    return answerArr.map(v => v[1])
}