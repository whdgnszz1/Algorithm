function solution(todo_list, finished) {
    var answer = [];
    todo_list.map((todo, i) => {
        if(!finished[i]){
            answer.push(todo)
        }
    })
    return answer;
}