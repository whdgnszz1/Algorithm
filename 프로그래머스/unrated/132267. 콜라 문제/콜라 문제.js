// 1. n을 a로 나눈 몫에 b를 곱한 값을 answer에 더한다.
// 2. 다음 먹을 콜라의 병 수를 구한다.
// 3. 다음 먹을 콜라의 병 수가 a개 이상일때까지 반복한다.
function solution(a, b, n) {
  var answer = 0;
  while(n >= a) {
    // 새로 받는 콜라의 병 수 parseInt(n / a) * b
    answer += parseInt(n / a) * b
    // 다음 먹을 콜라의 병 수
    n = parseInt(n / a) * b + (n % a)
  }
  return answer;
}
