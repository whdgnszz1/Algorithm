function solution(board, moves) {
    var answer = 0;
    let arr = Array.from({length:board.length}, (_,index) => [])
    let arr2 = []
    board.map((a) => a.map((b,index2) => arr[index2].push(b)))
    moves.map((v) => {
        for(let k = 0 ; k < arr[v-1].length; k++) {
            if(arr[v-1][k] !== 0) {
                if(arr2[arr2.length-1] === arr[v-1][k]) {
                    arr2.pop()
                    answer +=2
                    arr[v-1][k] = 0
                    break
                } else {
                    arr2.push(arr[v-1][k])
                    arr[v-1][k] = 0
                    break
                }
            }
        }
    })
    return answer;
}