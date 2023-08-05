function solution(str1, str2) {
    var answer = 0;
    // if (str1.indexOf(str2) >= 0) {
    //     answer = 1
    // } else {
    //     answer = 2
    // }
    let arr = []
    for (let i = 0; i < str1.length ; i++) {
        // str1에서 길이가 str2.length인 문자열 잘라서 arr에 담기
        arr.push(str1.substr(i, str2.length))
    }
    console.log(arr)
    
    for (let j = 0; j < arr.length; j++) {
        // 배열 a와 str2중 같은 배열이 있는지 확인
        if (arr[j] === str2) {
            answer = 1
            break;
        } else {
            answer = 2
        }
    }
    return answer;
}