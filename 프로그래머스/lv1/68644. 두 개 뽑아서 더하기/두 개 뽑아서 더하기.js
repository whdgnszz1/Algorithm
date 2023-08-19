// 1. 서로 다른 인덱스 두개의 숫자를 더해서 answer에 담는다
// 2. 정렬한다
// 3. 중복을 제거한다
function solution(numbers) {
  var answer = [];
  for(let i=0; i<numbers.length-1;i++){
    for(let j=i+1; j<numbers.length;j++){
      answer.push(numbers[i]+numbers[j]);
    }
  }
  let set = new Set(answer);
  return [...set].sort((a,b)=>a-b);
}