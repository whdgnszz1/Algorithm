function solution(arr, queries) {
    var answer = [];
    queries.map(v => {
        const s = v[0]
        const e = v[1]
        const k = v[2]
        const i = Array.from({length: e - s + 1}, (_, index) => index + s)
        i.map(v => {
            if( v % k === 0) {
                arr[v] = arr[v] + 1
            }
        })
    })
    return arr;
}