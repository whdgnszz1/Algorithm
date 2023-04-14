function solution(i, j, k) {
    var answer = 0;
    let arr = []
    
    for (let c=i; c<=j; c++) {
        arr.push(c)
    }
    console.log(arr)
    
    let x = arr.join("")
    let y = x.split("")
    let count = 0
    
    for (let i =0 ; i<= y.length ; i++) {
        if (y[i] == k)
            count ++
        }

    return count
}