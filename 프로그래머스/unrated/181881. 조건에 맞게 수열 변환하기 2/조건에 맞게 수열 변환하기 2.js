function solution(arr) {
    var answer = 0;
    
    while(true) {
        let prevArr = [...arr]
        let nextArr = arr.map(v => {
            if(v >= 50 && v % 2 === 0) {
                return v = v / 2
            } else if (v < 50 && v % 2 === 1) {
                return v = v * 2 + 1
            } else {
                return v = v
            }
        })
        console.log(prevArr, nextArr)
        arr = nextArr
        answer ++
        let count = 0
        for(let i = 0 ; i < prevArr.length; i++){
            if(prevArr[i] === nextArr[i]) {
                count++
            }
        }
        if(prevArr.length === count) {
            break
        }
    }
   
    return answer - 1 ;
}