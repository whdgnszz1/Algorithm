function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let mother = denom1 * denom2 / gdc(denom1, denom2)
    let son = (numer1 * mother / denom1) + (numer2 * mother / denom2)
    let answerGdc = gdc(mother, son)
    return [son/ answerGdc, mother/answerGdc]
}


function gdc(a, b) {
    let arr = [a,b].sort((a,b) => a - b)
    let x = arr[1]
    let y = arr[0]
    while(x % y != 0) {
        let r = x % y
        x = y
        y = r
    }
    return y
}

