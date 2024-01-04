function solution(board, k) {
    let answer = 0;
    const height = board.length;
    const width = board[0].length;

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(i + j <= k) {
                answer += board[i][j];
            }
        }
    }
    return answer;
}
