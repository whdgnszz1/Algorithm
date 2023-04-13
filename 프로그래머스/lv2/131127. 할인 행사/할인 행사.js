function solution(want, number, discount) {
    var answer = [];
    let map = new Map()
    
    for(let a = 0 ; a < discount.length; a++) {
        map.clear()
        let buy = 0
        
        for(let i = a ; i < 10 + a; i++) {
            map.set(discount[i], 0)
        }

        for(let j = a ; j < 10 + a ; j++) {
            map.set(discount[j], map.get(discount[j]) + 1)
        }
        
        for (let k = 0 ; k < want.length ; k++) {
            if(map.get(want[k]) >= number[k]) {
                buy++
            } 
        }
        if(buy === want.length) {
            answer.push(a)
        }
    }
    console.log(answer)
    return answer.length;
}