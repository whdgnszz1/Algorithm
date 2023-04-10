function solution(price, money, count) {
    let a = new Array(count).fill().map((v,i) => price * (i+ 1)).reduce((a,b) => a + b) - money
    return a <= 0 ? 0 : a
}





    // return price * count * (count + 1) / 2 - money !== 0 ? price * count * (count + 1) / 2 - money : 0
