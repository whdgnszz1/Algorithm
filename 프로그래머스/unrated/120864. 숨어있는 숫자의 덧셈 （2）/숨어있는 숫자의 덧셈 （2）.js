function solution(my_string) {
    var answer = [];
    const stringArr = my_string.split("");
    let stack = "";

    for (let i = 0; i < stringArr.length; i++) {
        if (isNaN(+stringArr[i])) {
            if (stack.length !== 0) {
                answer.push(stack);
                stack = "";
            }
        } else {
            stack += stringArr[i];
        }
    }

    if (stack.length !== 0) {
        answer.push(stack);
    }

    return answer.length ? answer.map(v => +v).reduce((acc, cur) => acc + cur) : 0;
}
