function solution(rny_string) {
    var answer = '';
    for(let i = 0 ; i < rny_string.length ; i++) {
        rny_string[i] === 'm' ? answer += 'rn' : answer += rny_string[i]
    }
    return answer;
}