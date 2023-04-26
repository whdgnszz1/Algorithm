function solution(quiz) {
    var answer = [];
    let arr = quiz.map(v => v.split(" "))
    console.log(arr)
    answer = arr.map(v => {
       if (v[1] === "+") {
         return Number(v[0]) + Number(v[2]) === Number(v[4]) ? "O" : "X"
       } else {
         return Number(v[0]) - Number(v[2]) === Number(v[4]) ? "O" : "X"
       }
    })
    return answer
}