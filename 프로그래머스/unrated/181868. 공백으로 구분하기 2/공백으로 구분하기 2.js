function solution(my_string) {
    const answer = []
    my_string.split(" ").map(string => {
        if(string.length) {
            answer.push(string)
        }
    })
    return answer;
}