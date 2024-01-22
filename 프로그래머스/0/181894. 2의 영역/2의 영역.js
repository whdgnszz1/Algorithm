function solution(arr) {
    var answer = [];
    
    arr.map((num, index )=> {
        if(num === 2) {
            answer.push(index)
        }
    })
    
    if(!answer.length){
        return [-1]
    }
    
    return arr.slice(answer[0], answer.reverse()[0] + 1)
}