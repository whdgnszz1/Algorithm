function solution(arr, queries) {
    var answer = [];
    queries.map(v => {
        let copiedArr = [...arr]
        arr[v[0]] = copiedArr[v[1]]
        arr[v[1]] = copiedArr[v[0]]  
    })
    return arr;
}