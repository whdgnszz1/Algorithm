function solution(num_list) {
    let len = num_list.length
    let last = num_list[len-1]
    let prev = num_list[len-2]
    last > prev ? num_list.push( last - prev ) : num_list.push( last * 2)
    return num_list
}