function solution(arr) {
    let count = Math.abs(arr.length - arr[0].length)

    arr.map(v => {
        if(v.length < arr.length) {
           for(let i = 0 ; i < count ; i ++) {
               v.push(0)
           }
        }
    })
    
    if (arr[0].length > arr.length) {
           for(let j = 0 ; j < count ; j ++) {
               let addArr = Array.from({length: arr[0].length}, (_, index) => index).fill(0)
               arr.push(addArr)
           } 
    }
    
    return arr
}