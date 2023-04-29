function solution(rank, attendance) {
    var answer = 0;
    let arr1 = rank.map((v,i) => [v,i])
    let arr2 = arr1.filter((v,i) => attendance[i] == true)
    let sortedArr = arr2.sort((a,b) => a[0]- b[0]).map(v => v[1])
    console.log(sortedArr)
    return sortedArr[0] * 10000 + sortedArr[1] * 100 + sortedArr[2]
}