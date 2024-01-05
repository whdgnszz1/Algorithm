function solution(my_string, indices) {
    var answer = '';
    my_string.split("").map((char, index) => {
        if(!indices.includes(index)) {
            answer += char
        }
    })
    return answer;
}