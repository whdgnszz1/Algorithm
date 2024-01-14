function solution(arr, flag) {
    var answer = [];
    flag.map((flag, i) => {
        if(flag) {
            for(let j = 0 ; j < arr[i] * 2 ; j ++) {
                answer.push(arr[i])
            }
        } else {
             for(let j = 0 ; j < arr[i] ; j ++) {
                answer.pop()
            }
        }
    })
    return answer;
}