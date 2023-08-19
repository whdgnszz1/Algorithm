function solution(array, commands) {
  //return 할 배열 만들기
  let answer = []
  commands.forEach((a) => {
    // command에 따라서 잘라넣을 배열
    let arr = array.slice(a[0] - 1, a[1])
    arr.sort((a,b) => a- b);
    answer.push(arr[a[2] - 1])
  })
  return answer;
}