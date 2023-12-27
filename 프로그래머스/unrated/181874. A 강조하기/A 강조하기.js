function solution(myString) {
    var answer = '';
    const charArr = myString.toLowerCase().split("")
    charArr.map(char => {
        char === "a" ? answer += "A" : answer += char
    })
    return answer;
}