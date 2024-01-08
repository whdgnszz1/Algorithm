function solution(arr, queries) {
    let answer = arr
    while(queries.length !== 0) {
        let start = queries[0][0]
        let end = queries[0][1]
        for(let i = start ; i <= end ; i++) {
            arr[i] = arr[i] + 1
        }
        queries.shift()
    }
    return answer;
}