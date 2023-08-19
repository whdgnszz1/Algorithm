function solution(strings, n) {
    var answer = [];
    // sort함수에서의 결과값이 없음
    strings.sort((a,b)=>{
      // a[n]과 b[n]을 localeCompare를 이용해서 비교
      // 2. a[n].localeCompare(b[n]) 의 결과값이 0일때
      return a[n].localeCompare(b[n]) === 0 ? a.localeCompare(b) : a[n].localeCompare(b[n]) ;
    });
  
    return strings;
}
