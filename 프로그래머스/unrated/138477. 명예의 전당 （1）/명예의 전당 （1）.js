function solution(k, score) {
    var answer = [];
    // 명예의 전당 리스트를 만들고
    let arr = []
    // score를 for문으로 돌아서 명예의전당의 min보다 score가 높으면 score를 명예의 전당에 추가
    for (let i = 0; i < score.length; i++) {
        if(arr.length < k) {
            arr.push(score[i])
            arr.sort((a,b) => a - b)
        } else {
            arr.push(score[i])
            arr.sort((a,b) => a - b)
            arr.shift()
        }
        answer.push(arr[0])
    }
    return answer
}