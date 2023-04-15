function solution(polynomial) {
    var answer = '';
    let arr = polynomial.replace(/ /g,"").split("+")
    let num = 0
    let numArr = arr.map(v => {
        if(!isNaN(+v)) num += +v
    })
    let xNum = 0
    arr.map(v => {
        if(v.includes("x")) {
            v === "x" ? xNum++ : xNum += Number(v.slice(0,-1))
        }
    })
    if (xNum === 1 && num === 0) {
        return "x"
    } else if (xNum ===1 && num > 0) {
        return `x + ${num}`
    } else if (xNum > 0 && num > 0) {
        return `${xNum}x + ${num}`
    } else if (xNum == 0 && num > 0) {
        return `${num}`
    } else if (xNum > 0 && num === 0) {
        return `${xNum}x`
    } else {
        return 0
    }
}