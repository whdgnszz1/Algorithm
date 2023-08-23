function solution(babbling) {
    let answer = 0
    let can = ["aya", "ye", "woo", "ma"]
    let cant = ['ayaaya', 'yeye', 'woowoo', 'mama']

    for(let i = 0 ; i < babbling.length; i++){
        for(let j = 0 ; j < cant.length ; j++) {
            if(babbling[i].includes(cant[j])) {
                babbling[i] = "z"
            }
        }
    }

    // let arr = babbling.map(v => {
    //    return can.map(w => {
    //        return v = v.replaceAll(w,"")
    //     })
    // })    
    for(let l = 0 ; l < babbling.length; l++){
        for(let m = 0 ; m < can.length; m++) {
           babbling[l] = babbling[l].replaceAll(can[m],".")

        }
    }

    for(let i = 0 ; i < babbling.length ; i++) {
        babbling[i] = babbling[i].replaceAll(".", "")
    }

    for(let i = 0 ; i < babbling.length ; i++) {
       if(babbling[i].length === 0) answer++
    }

    return answer
}