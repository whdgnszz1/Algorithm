function solution(num_list) {
    let answer=[]
    num_list.map((v,i) => {
        v<0 && answer.push(i)
    })
   return answer.length>0? answer[0] : -1
}