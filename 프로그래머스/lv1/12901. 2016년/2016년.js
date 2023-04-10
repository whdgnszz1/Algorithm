function solution(a, b) {
    // var answer = '';
    // if(a + b === 2) {
    //     return "FRI"
    // }  else {
    //      switch(a) {
    //     case 1 : a = 0
    //         break
    //     case 2 : a = 31
    //         break
    //     case 3 : a = 31 + 29
    //         break
    //     case 4 : a = 31 + 29 + 31
    //         break
    //     case 5 : a = 31 + 29 + 31 + 30
    //         break
    //     case 6 : a = 31 + 29 + 31 + 30 + 31
    //         break
    //     case 7 : a = 31 + 29 + 31 + 30 + 31 + 30
    //         break
    //     case 8 : a = 31 + 29 + 31 + 30 + 31 + 30 + 31
    //         break
    //     case 9 : a = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30
    //         break
    //     case 10 : a = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31
    //         break
    //     case 11 : a = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30
    //         break
    //     case 12 : a = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 30 + 31 + 30 + 31
    //         break       
    // }
    // let day = (a + b - 1) % 7
    // switch(day) {
    //     case 0 : answer = "FRI"
    //         break
    //     case 1 : answer = "SAT"
    //         break
    //     case 2 : answer = "SUN"
    //         break
    //     case 3 : answer = "MON"
    //         break
    //     case 4 : answer = "TUE"
    //         break
    //     case 5 : answer = "WED"
    //         break
    //     case 6 : answer = "THU"
    //         break   
    // }
    //     return answer
    // }
    let date = new Date(2016, a-1 ,b)
    let weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    return weekday[date.getDay()];
}




   
    