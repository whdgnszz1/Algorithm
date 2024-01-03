function solution(my_string, m, c) {
    const str = my_string.split("")
    const arr = [];
    let answer = ""
    const count = Math.ceil(my_string.length / m)
    for(let i = 0 ; i < count ; i ++) {
        arr.push(str.splice(0,m))
    }
    arr.map(v => answer += v[c - 1])
    return answer
}