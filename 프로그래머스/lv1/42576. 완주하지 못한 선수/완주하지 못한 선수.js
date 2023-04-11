function solution(participant, completion) {
    var answer = [];
    let arr = new Map()
    // 해시함수 => 해시테이블 // 시간복잡도가 O(1) / key - value
    // for문 ==> O(n)
    // 참가자 명단
    for (let i = 0 ; i < participant.length ; i++) {
        arr.set(participant[i], 0)     
    }
    // 참가자 명단에 있으면 값을 가져와서 +1
    for (j = 0 ; j < participant.length; j++) {
        arr.set(participant[j], arr.get(participant[j]) + 1)
    }
    // 완료자 명단에 있으면 값을 가져와서 -1
    for (k = 0 ; k < completion.length; k++) {
        arr.set(completion[k], arr.get(completion[k]) - 1)
    }
 
    [...arr].map((v) => {if (v[1] === 1) {
        answer.push(v[0])
    }})
    
    return answer[0]
}