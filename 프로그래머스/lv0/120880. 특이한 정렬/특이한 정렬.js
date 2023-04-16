function solution(numlist, n) {
    var answer = [];
    let arr = numlist.map(v => [v, Math.abs(v - n)]).sort((a,b) => a[1] - b[1])
    let sorted = arr.sort((a,b) => {
        if(a[1] === b[1]) {
            return b[0] - a[0]
        }
    })
    return sorted.map(v => v[0])
}