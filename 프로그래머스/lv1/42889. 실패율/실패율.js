function solution(N, stages) {
    var answer = [];
    //stage n의 실패율 = stages에 있는 n의 개수 / stages에 있는 n보다 큰 숫자의 개수
    for ( let i = 1 ; i <= N ; i++) {
        let a = stages.filter((v) => v === i).length
        let b = stages.filter((v) => v > i).length + a
        if ( a / b === Infinity ) {
            answer.push([i, 0])
        } 
        // else if (a === 0) {
        //     answer.push([i, 0])
        // } 
        else {
            answer.push([i, 1 - a / b])
        }
    }

    answer.sort(function compare(a, b) {
        if ( a[1] > b[1]) {
            return 1
        } else if (a[1] < b[1]) {
            return -1
        } else {
            return 0
        }
    });
    let arr =  answer.map((v) => v[0])
    return arr
}