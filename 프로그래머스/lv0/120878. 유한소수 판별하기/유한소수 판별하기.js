function solution(a, b) {
    function gcd(a, b) {
        let r
        while (b != 0) {
            r = a % b
            a = b
            b = r
        }
        return a
    }
    let gcdNum = gcd(a,b)
    let mother = b / gcdNum
    
    while(mother % 2 === 0) {
        mother = mother / 2
    }
    while(mother % 5 === 0) {
        mother = mother / 5
    }
    console.log(mother)
    
    return mother === 1 ? 1 : 2
}




