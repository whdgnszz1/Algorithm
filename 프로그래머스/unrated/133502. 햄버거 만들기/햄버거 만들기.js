function solution(ingredient) {
    let stack = [];
    let answer = 0;
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        // 스택에 4개 이상의 재료가 있고, 마지막 4개의 재료가 햄버거 조건을 만족하는지 확인
        if (stack.length >= 4 && 
            stack[stack.length - 4] === 1 && 
            stack[stack.length - 3] === 2 && 
            stack[stack.length - 2] === 3 && 
            stack[stack.length - 1] === 1) {
            // 햄버거를 만들면 스택에서 해당 재료들을 제거
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            answer++;
        }
    }
    
    return answer;
}
