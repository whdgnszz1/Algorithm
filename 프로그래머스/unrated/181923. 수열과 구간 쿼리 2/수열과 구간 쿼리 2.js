function solution(arr, queries) {
    var answer = [];
    const answerArr = []
    queries.map(v => {
        let s = v[0]
        let e = v[1]
        let k = v[2]
        // s <= i <= e인 i찾기
        let i = Array.from({length: e - s + 1}, (_, index) => (index + s))
        answer.push(i.map(v => {if (arr[v] > k) {
            return arr[v]
        }}).sort((a,b) => (a - b))[0])
    })
    answer.map(v => {
        if(v === undefined) {
            answerArr.push(-1)
        } else {
            answerArr.push(v)
        }
    })
    return answerArr;
}