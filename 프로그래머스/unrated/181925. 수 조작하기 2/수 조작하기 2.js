function solution(numLog) {
    var answer = '';
    for(let i = 1 ; i < numLog.length ; i++) {
        let dif = numLog[i] - numLog[i - 1]
        switch(true) {
            case dif === 1:
                answer += "w"
                break;
            case dif === -1:
                answer += "s"
                break;
            case dif === 10:
                answer += "d"
                break;
            case dif === -10:
                answer += "a"
                break;
        }
    }
    return answer;
}