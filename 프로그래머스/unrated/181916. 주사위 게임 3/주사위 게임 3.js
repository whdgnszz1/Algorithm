function solution(a, b, c, d) {
    var arr = [a,b,c,d];
    let obj = new Map()
    arr.map((item) => {
        obj.has(item)? obj.set(item,obj.get(item)+1) : obj.set(item,1)
    })
    let sortedArr = [...obj].sort((a,b) => b[1]-a[1])
    
    if(sortedArr.length === 1) {
        return 1111 * sortedArr[0][0]
    } else if (sortedArr.length === 2 && sortedArr[0][1]===3) {
        return Math.pow(10 * sortedArr[0][0] + sortedArr[1][0], 2)
    } else if (sortedArr.length === 2) {
        return (sortedArr[0][0] + sortedArr[1][0]) * (Math.abs(sortedArr[0][0] - sortedArr[1][0]))
    } else if (sortedArr.length === 3) {
        return (sortedArr[1][0] * sortedArr[2][0])
        } else {
            return sortedArr.map(v => v[0]).sort((a,b) => a-b)[0]
        }
}