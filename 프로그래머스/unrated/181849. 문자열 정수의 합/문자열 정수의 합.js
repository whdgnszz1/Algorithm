function solution(num_str) {
    return num_str.split("").map(v => +v).reduce((a,b) => a + b)
}