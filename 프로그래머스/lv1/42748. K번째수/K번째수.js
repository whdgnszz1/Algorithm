function solution(array, commands) {
    var answer = [];
    let arr = [...array]
    for (i = 0 ; i < commands.length; i++) {
        let a = commands[i][0]
        let b = commands[i][1]
        let c = commands[i][2]
        let d = arr.slice(a-1,b).sort((a,b) => a - b)
        answer.push(d[c-1])
    }
    return answer;
}