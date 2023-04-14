function solution(bin1, bin2) {
    var answer = '';
    let sum = parseInt(bin1, 2) + parseInt(bin2, 2)
    let change = sum.toString(2)
    return change;
}