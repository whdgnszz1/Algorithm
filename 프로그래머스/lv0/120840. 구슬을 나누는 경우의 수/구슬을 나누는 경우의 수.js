function solution(balls, share) {

    let a = 1
    for(let i = balls ; i > 0 ; i--) {
        a *= i
    }
    let b = 1
    for(let j = share ; j > 0 ; j--) {
        b *= j
    }
    let c = 1
    for(let k = balls - share ; k > 0 ; k--) {
        c *= k
    }
    console.log(a, b, c)
    
    return  Math.round(a / (b * c))
}