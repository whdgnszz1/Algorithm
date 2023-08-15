function solution(l, r) {
    var answer = [];
                // 1 ~ 200000 배열   ==> [ 5, 50, 55 , 500 , ... 1000000]
    let arr = Array.from({length:200000}, (_,index) => index+1).map(v => v.toString(2)* 5)
    let filteredArr = arr.filter(v => 
        v >= l && v <= r
    )
    return filteredArr.length ? filteredArr : [-1];
}