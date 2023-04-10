function solution(s) {
    var answer = '';
    let indexArr = []
    let arr = s.split("").map((v, i) => {
        if (v === " ") {
            indexArr.push(i)
        }
    })
    console.log(indexArr)
    
    let arr1 = s.split(" ").map((v, i) => v.split("").map((v, i) => {
        if(i === 0 || i % 2 === 0) {
            answer += v.toUpperCase()
        } else {
            answer += v.toLowerCase()
        }
    }))
    let arr2 = answer.split("")
    for (j = 0 ; j < indexArr.length; j++) {
        arr2.splice(indexArr[j], 0, " ")
    }
    console.log(arr2)
    return arr2.join("")

}