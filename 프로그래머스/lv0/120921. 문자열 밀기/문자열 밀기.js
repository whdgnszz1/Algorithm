function solution(A, B) {
    var answer = 0;
    let arr = A.split("")
    while(answer<arr.length){
        if(arr.join("") === B){
            return answer
        } else {
            let lastStr = arr[arr.length-1]
            arr.pop()
            arr.unshift(lastStr)
            answer = answer+1
        }
    }
    return -1;
}