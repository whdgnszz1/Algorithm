function solution(num_list) {
    let sortedArr = num_list.sort((a,b) => (a - b))
    num_list.sort((a,b) => (a - b)).splice(0,5)
    return sortedArr
 }