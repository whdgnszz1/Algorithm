function solution(s) {
    var answer = 0;
    let sArr = s.split("")
    let same = []
    let diff = []
    
    while(sArr.length){
        if(!same.length) {
            same.push(sArr.shift())
        }
        if(sArr[0] === same[0]) {
            same.push(sArr.shift())
        } else {
            diff.push(sArr.shift())
        }
        if(same.length === diff.length) {
          answer++
          same = []
          diff = []
        }
    }
    
    if (same.length > 0 || diff.length > 0) {
        answer++;
    }
    return answer ? answer : 1
}