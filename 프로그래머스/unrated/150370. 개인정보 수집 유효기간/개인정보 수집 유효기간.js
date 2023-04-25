function solution(today, terms, privacies) {
    let answer = []
    let arr = new Map()
    terms.map(v => {
        arr.set(v.split(" ")[0],v.split(" ")[1] * 28)
    })
    let todayArr = today.split(".").map(v => +v)
    let todayNum = calDay(todayArr)
    
    let startArr = privacies.map(v =>{
        return calDay(v.split(" ")[0].split(".").map(v=> +v))
    })
    
    let validateArr = privacies.map(v => arr.get(v.split(" ")[1]))
    let subArr = startArr.map((v,i) => v-todayNum + validateArr[i])
    console.log(subArr)
    
    subArr.map((v,i) =>{
       if( v <= 0 )  answer.push(i+1)
    })
    
    return answer
}

function calDay(arr) {
    return arr[0] * 12 * 28 + arr[1] * 28 + arr[2]
}


//  var answer = [];
    // let arr = new Map()
    // terms.map(v => {
    //     arr.set(v.split(" ")[0],v.split(" ")[1] * 28)
    // })
//     console.log(arr)
//     let answerArr = privacies.map(v => {
//         // console.log(calcDate(v.split(" ")[0]), arr.get(v.split(" ")[1]))
//         // console.log(calcDate(v.split(" ")[0]), (v.split(" ")[1]))
//         // console.log(calcDate(today))
//         console.log(calcDate(today) - calcDate(v.split(" ")[0]))
//         let validate = arr.get(v.split(" ")[1])
//         console.log(validate)
//         // 시작 날짜 + 유효기간 < 오늘 이면 폐기
//         return calcDate(v.split(" ")[0]) + validate  < calcDate(today) ? true : false
//     })
//     console.log(answerArr)
//     return answer;
// }



// function calcDate(str) {
//     let arr = str.split(".").map(v => +v)
//     let date = new Date(arr[0],arr[1],arr[2])
//     // 1970년부터 며칠이 지났나
//     return Date.parse(date) / 86400000