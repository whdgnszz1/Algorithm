function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.map(v => {
       if( Number(v.slice(s,s+l)) > k ) {
           answer.push(Number(v.slice(s,s+l)))
       }
    })
    return answer;
}