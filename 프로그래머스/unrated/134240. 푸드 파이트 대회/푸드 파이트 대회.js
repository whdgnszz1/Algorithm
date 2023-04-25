function solution(food) {
    var answer = '';
    let arr = food.map(v => Math.floor(v / 2))
    let prevStr = ""
    arr.map((v,i) => prevStr += `${i}`.repeat(v))
    console.log(prevStr)
    let reverseStr = prevStr.split("").reverse().join("")
    return `${prevStr}0${reverseStr}`
}