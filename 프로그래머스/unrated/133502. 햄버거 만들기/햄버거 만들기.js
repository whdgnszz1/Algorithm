function solution(ingredient) {
    var answer = 0;
    while(true) {
        let beforeLength = ingredient.length;
        
        for(let i = 0 ; i < ingredient.length-3; i++) {
            if( ingredient[i] == 1 && ingredient[i+1] == 2 && ingredient[i+2] == 3 && ingredient[i+3] == 1) {
                answer++
                ingredient.splice(i , 4);
                i -= 3; // 재료를 제거한 후 인덱스 조정
            }
        }
        
        // 만약 포장 가능한 햄버거가 더 이상 없으면 break
        if (beforeLength === ingredient.length) {
            break;
        }
    }
    return answer;
}
