function solution(brown, yellow) {
    var answer = [];
    let avaliableArr = []
    for(let i = 1 ; i <= Math.sqrt(brown + yellow); i++) {
        if((brown + yellow) % i === 0) {
            avaliableArr.push([i, (brown + yellow)/i])
        }
    }
    
    avaliableArr.map((avaliable) => {
       if ((avaliable[0] - 2) * (avaliable[1] - 2) === yellow){
           answer = (avaliable)
       }
    })
    
    return answer.sort((a,b) => b-a);
}