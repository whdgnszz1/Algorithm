function solution(a, b) {
    const x = String(a) + String(b)
    const y = String(b) + String(a)
    // if(x > y) {
    //     return Number(x)
    // } else if ( x < y) {
    //     return Number(y)
    // } else {
    //     return 
    // }
    return x >= y ? Number(x) : Number(y)
}