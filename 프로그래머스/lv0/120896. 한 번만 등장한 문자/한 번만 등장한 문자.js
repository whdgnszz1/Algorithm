function solution(s) {
    var answer = '';
    let arr = s.split("")
    // h e l l o
    let alp = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for (let j = 0 ; j < alp.length; j++) {
        let count = 0
        for(let i = 0 ; i < arr.length; i++ ) {
            if(alp[j] === arr[i]) {
                count++
            } 
        }
        if (count === 1) {
            answer += alp[j]
        } 
    }    
    return answer;
}