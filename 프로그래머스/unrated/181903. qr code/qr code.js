function solution(q, r, code) {
    return code.split("").map((v,i) => [v, i % q]).filter(v => v[1] === r).map(v => v[0]).join("")
    
}