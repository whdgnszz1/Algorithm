function solution(my_string, alp) {
    let answer = ""
    const stringArr = my_string.split("")
    stringArr.map(str => {
        str === alp ? answer += str.toUpperCase() : answer += str
    })
    return answer
}