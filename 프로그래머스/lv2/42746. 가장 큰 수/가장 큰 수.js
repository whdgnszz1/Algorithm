function solution(numbers) {
    var answer = '';
    let sortedArr = numbers.map(v => String(v)).sort((a,b) => {
        if(Number(a+b) > Number(b+a)) {
            return -1
        } else {
            return 0
        }
    })
    let preAnswer = sortedArr.join("").replaceAll(0,"")
    
    return preAnswer.length === 0 ?  "0" :sortedArr.join("")
}

    // console.log(sortedArr)
    // for(let i = 0 ; i < numbers.length; i ++) {
    //     console.log(sortedArr[0] + sortedArr[1] , sortedArr[1] + sortedArr[0])
    //     if (Number(sortedArr[0] + sortedArr[1]) > Number( sortedArr[1] + sortedArr[0] ) ) {
    //         answer += sortedArr[0]
    //         sortedArr.splice(0,1)
    //     } else {
    //         answer += sortedArr[1]
    //         sortedArr.splice(1,1) 
    //     }
    // }





// let sortedArr = numbers.map(v => String(v)).sort((a,b) => {
//          if( +a[0] > +b[0] ) {
//             return -1
//          } else if ( +a[0] < +b[0] ) {
//              return 1
//          } else if ( +a[1] !==undefined && +b[1] !== undefined && +a[0] === +b[0]){
//            if( +a[1] > +b[1]) {
//                return -1
//            } else if (+a[1] < +b[1]) {
//                return 1
//            } else {
//                return 0
//            }
//          } 
//     })