function solution(a, b, c) {
    const numArr = [a, b, c]
    const numMap = new Map()
    numArr.map(num => {
        numMap.has(num) ? numMap.set(num, numMap.get(num) + 1) : numMap.set(num, 1)
    })
    const mapSize = numMap.size
    
    if(mapSize === 1) {
        return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    } else if (mapSize === 2) {
        return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2))
    } else {
        return a + b + c
    }
}