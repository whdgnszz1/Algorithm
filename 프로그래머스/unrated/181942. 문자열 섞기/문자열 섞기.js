function solution(str1, str2) {
    var answer = '';
    str1.split("").map((v,i) => {
        answer += str1.split("")[i]
        answer += str2.split("")[i]
    })
    return answer;
}